import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostReportsStatusRequest extends SpeakeasyBase {
    /**
     * Unique hash belonging to report
     */
    reportHash: string;
}
export declare class PostReportsStatusResponse extends SpeakeasyBase {
    /**
     * Possible reasons include:<br>{success: 0, msg: Invalid API parameters, error_code_msg: API_INVALID_PARAMS}<br>{success: 0, msg: Error please include the 'action' parameter, error_code_msg: API_MISSING_ACTION_PARAMETER}
     */
    fourHundredError?: shared.FourHundredError;
    /**
     * {success: 0, msg: Invalid API key, error_code_msg: API_INVALID_KEY}
     */
    fourHundredAndOneError?: shared.FourHundredAndOneError;
    /**
     * {success: 0, msg: you are going too fast}
     */
    fourHundredAndThreeError?: shared.FourHundredAndThreeError;
    /**
     * Possible reasons include:<br>{success: 0, msg: Error getting application's credentials, error_code_msg: API_ERROR_GETTING_APPLICATION_INFO}<br>{success: 0, msg: Internal database error, error_code_msg: API_ERROR_DATABASE_INITIATION_ERROR}<br>{success: 0, msg: Report has no data, error_code_msg: API_ERROR_EMPTY_REPORT}
     */
    fiveHundredError?: shared.FiveHundredError;
    contentType: string;
    /**
     * Success
     */
    reportStatus?: shared.ReportStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
