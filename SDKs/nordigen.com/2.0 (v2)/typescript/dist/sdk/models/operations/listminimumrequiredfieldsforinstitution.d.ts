import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListMinimumRequiredFieldsForInstitutionRequest extends SpeakeasyBase {
    institutionId: string;
}
export declare class ListMinimumRequiredFieldsForInstitutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Minimum required fields
     */
    listMinimumRequiredFieldsForInstitution200ApplicationJSONObject?: Record<string, any>;
    /**
     * Unknown Fields
     */
    listMinimumRequiredFieldsForInstitution400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    listMinimumRequiredFieldsForInstitution401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    listMinimumRequiredFieldsForInstitution403ApplicationJSONObject?: Record<string, any>;
}
