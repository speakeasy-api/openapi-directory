import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateItemTaxesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateItemTaxesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateItemTaxesResponse?: shared.UpdateItemTaxesResponse;
}
