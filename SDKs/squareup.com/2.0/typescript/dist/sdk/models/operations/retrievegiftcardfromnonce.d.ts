import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveGiftCardFromNonceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveGiftCardFromNonceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveGiftCardFromNonceResponse?: shared.RetrieveGiftCardFromNonceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
