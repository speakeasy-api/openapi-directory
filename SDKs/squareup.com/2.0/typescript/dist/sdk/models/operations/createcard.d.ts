import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCardResponse?: shared.CreateCardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
