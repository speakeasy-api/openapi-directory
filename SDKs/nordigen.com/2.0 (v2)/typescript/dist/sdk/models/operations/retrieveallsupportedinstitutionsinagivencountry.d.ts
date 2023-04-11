import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAllSupportedInstitutionsInAGivenCountryRequest extends SpeakeasyBase {
    /**
     * ISO 3166 two-character country code
     */
    country?: string;
    /**
     * Boolean value, indicating if payments are enabled
     */
    paymentsEnabled?: string;
}
export declare class RetrieveAllSupportedInstitutionsInAGivenCountryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * list of supported Institutions in the country
     */
    integrations?: shared.Integration[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unknown Fields
     */
    retrieveAllSupportedInstitutionsInAGivenCountry400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    retrieveAllSupportedInstitutionsInAGivenCountry401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    retrieveAllSupportedInstitutionsInAGivenCountry403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    retrieveAllSupportedInstitutionsInAGivenCountry404ApplicationJSONObject?: Record<string, any>;
}
