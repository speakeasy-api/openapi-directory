import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostReportsDatesRequest extends SpeakeasyBase {
    /**
     * Unique report hash
     */
    reportHash: string;
}
export declare class PostReportsDatesResponse extends SpeakeasyBase {
    /**
     * Possible reasons include:<br>{success: 0, msg: Invalid API parameters, error_code_msg: API_INVALID_PARAMS}<br>{success: 0, msg: Error please include the 'action' parameter, error_code_msg: API_MISSING_ACTION_PARAMETER}
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
    reportDates?: shared.ReportDates;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
