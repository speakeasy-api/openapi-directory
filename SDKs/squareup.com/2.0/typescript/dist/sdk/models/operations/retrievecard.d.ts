import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveCardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveCardRequest extends SpeakeasyBase {
    /**
     * Unique ID for the desired Card.
     */
    cardId: string;
}
export declare class RetrieveCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveCardResponse?: shared.RetrieveCardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
