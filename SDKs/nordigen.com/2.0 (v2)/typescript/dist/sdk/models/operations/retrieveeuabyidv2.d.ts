import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveEUAByIdV2Request extends SpeakeasyBase {
    /**
     * A UUID string identifying this end user agreement.
     */
    id: string;
}
export declare class RetrieveEUAByIdV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieve end user agreement by ID
     */
    endUserAgreement?: shared.EndUserAgreement;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid ID
     */
    retrieveEUAByIdV2400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    retrieveEUAByIdV2401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    retrieveEUAByIdV2403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    retrieveEUAByIdV2404ApplicationJSONObject?: Record<string, any>;
}
