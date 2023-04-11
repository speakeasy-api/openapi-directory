import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportsRequest extends SpeakeasyBase {
    /**
     * Default value will be 'world'
     */
    baseline?: number;
    /**
     * report_date represents a Unix timestamp of when the report was generated. Default value will be the latest report generated. You can request the /report/dates/ endpoint in order to obtain available timestamps. Date must be in the future.
     */
    reportDate?: number;
    /**
     * Unique report hash
     */
    reportHash: string;
    /**
     * Sample report indicator
     */
    sample: number;
}
export declare class GetReportsResponse extends SpeakeasyBase {
    /**
     * Possible reasons include:<br>{success: 0, msg: Invalid API parameters, error_code_msg: API_INVALID_PARAMS}<br>{success: 0, msg: Error please include the 'action' parameter, error_code_msg: API_MISSING_ACTION_PARAMETER}<br>{success: 0, msg: Invalid or non-existent baseline supplied, error_code_msg: INVALID_BASELINE}<br>{success: 0, msg: Invalid report_date parameter value. Must be an integer, error_code_msg: INVALID_REPORT_DATE}
     */
    fourHundredError?: shared.FourHundredError;
    /**
     * {success: 0, msg: Invalid API key, error_code_msg: API_INVALID_KEY}
     */
    fourHundredAndOneError?: shared.FourHundredAndOneError;
    /**
     * {success: 0, msg: You are going too fast}
     */
    fourHundredAndThreeError?: shared.FourHundredAndThreeError;
    /**
     * {success: 0, msg: Report does not currently exist, error_code_msg: API_ERROR_RETRIEVING_REPORT}
     */
    fourHundredAndFourError?: shared.FourHundredAndFourError;
    /**
     * Possible reasons include:<br>{success: 0, msg: Report has no data, error_code_msg: API_ERROR_EMPTY_REPORT}<br>{success: 0, msg: Internal database error, error_code_msg: API_ERROR_DATABASE_INITIATION_ERROR}<br>{success: 0, msg: Error getting application's credentials, error_code_msg: API_ERROR_GETTING_APPLICATION_INFO}
     */
    fiveHundredError?: shared.FiveHundredError;
    contentType: string;
    /**
     * Success
     */
    reportSuccess?: shared.ReportSuccess;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
