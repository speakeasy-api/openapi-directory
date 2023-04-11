import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchPatientHealthMetricRequest extends SpeakeasyBase {
    /**
     * Patient health metric identifier
     */
    id: string;
}
export declare class FetchPatientHealthMetricResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchPatientHealthMetricResponse?: shared.FetchPatientHealthMetricResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
