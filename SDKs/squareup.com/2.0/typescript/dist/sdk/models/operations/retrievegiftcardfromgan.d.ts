import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveGiftCardFromGANSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveGiftCardFromGANResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveGiftCardFromGANResponse?: shared.RetrieveGiftCardFromGANResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
