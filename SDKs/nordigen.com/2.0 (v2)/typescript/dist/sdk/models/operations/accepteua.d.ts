import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AcceptEUARequest extends SpeakeasyBase {
    enduserAcceptanceDetailsRequest: shared.EnduserAcceptanceDetailsRequest;
    /**
     * A UUID string identifying this end user agreement.
     */
    id: string;
}
export declare class AcceptEUAResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EUA
     */
    endUserAgreement?: shared.EndUserAgreement;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid ID
     */
    acceptEUA400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    acceptEUA401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    acceptEUA403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    acceptEUA404ApplicationJSONObject?: Record<string, any>;
    /**
     * EUA accepted
     */
    acceptEUA405ApplicationJSONObject?: Record<string, any>;
}
