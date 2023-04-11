import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateItemModifierListsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateItemModifierListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateItemModifierListsResponse?: shared.UpdateItemModifierListsResponse;
}
