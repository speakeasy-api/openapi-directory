import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreCheckStatusJsonRequest extends SpeakeasyBase {
    /**
     * Partner authentication token.
     */
    authToken: string;
    /**
     * ISO 3166-2 code of the language used in the response messages.
     */
    locale?: string;
    /**
     * Partner code.
     */
    partnerCode: string;
    /**
     * Store Code
     */
    storeCode: string;
}
export declare class GetStoreCheckStatusJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request.
     */
    partnerError?: shared.PartnerError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A Store status object if creation is still in progress. A new Partner Store object when creation is done.
     */
    getStoreCheckStatusJSON200ApplicationJSONOneOf?: any;
}
