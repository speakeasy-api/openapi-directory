import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveInstitutionRequest extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveInstitutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieve institution by id
     */
    integration?: shared.Integration;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid token
     */
    retrieveInstitution401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    retrieveInstitution403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    retrieveInstitution404ApplicationJSONObject?: Record<string, any>;
}
