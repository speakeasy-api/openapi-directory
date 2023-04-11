import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostReportsCustomGenerateRequest extends SpeakeasyBase {
    /**
     * Name of the report
     */
    reportName: string;
}
export declare class PostReportsCustomGenerateResponse extends SpeakeasyBase {
    /**
     * Possible reasons include:<br>{success: 0, msg: Invalid API parameters, error_code_msg: API_INVALID_PARAMS}<br>{success: 0, msg: Error please include the 'action' parameter, error_code_msg: API_MISSING_ACTION_PARAMETER}
     */
    fourHundredError?: shared.FourHundredError;
    /**
     * {success: 0, msg: Invalid API key, error_code_msg: API_INVALID_KEY}
     */
    fourHundredAndOneError?: shared.FourHundredAndOneError;
    /**
     * Possible reasons include:<br>{success: 0, msg: you are going too fast}<br>{success: 0, msg: Not enough tokens remaining under your application, error_code_msg: API_INSUFFICIENT_TOKENS_REMAINING}
     */
    fourHundredAndThreeError?: shared.FourHundredAndThreeError;
    /**
     * Possible reasons include:<br>{success: 0, msg: Error getting application's credentials, error_code_msg: API_ERROR_GETTING_APPLICATION_INFO}<br>{success: 0, msg: Internal database error, error_code_msg: API_ERROR_DATABASE_INITIATION_ERROR}
     */
    fiveHundredError?: shared.FiveHundredError;
    contentType: string;
    /**
     * Success
     */
    customGenerate?: shared.CustomGenerate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
