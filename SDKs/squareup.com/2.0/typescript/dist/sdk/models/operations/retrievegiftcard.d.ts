import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveGiftCardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveGiftCardRequest extends SpeakeasyBase {
    /**
     * The ID of the gift card to retrieve.
     */
    id: string;
}
export declare class RetrieveGiftCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveGiftCardResponse?: shared.RetrieveGiftCardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
