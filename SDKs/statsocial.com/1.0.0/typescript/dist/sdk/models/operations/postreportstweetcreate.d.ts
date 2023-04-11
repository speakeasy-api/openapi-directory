import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostReportsTweetCreateRequest extends SpeakeasyBase {
    /**
     * A unix timestamp. end_date will be set to the next midnight.
     */
    endDate: number;
    /**
     * Filtering options to be used when creating a filtered report. The options must be in JSON form, example: {'gender':['male'],'ages':['18-24'],'countries':['usa']}
     */
    filter?: string;
    /**
     * Name of report
     */
    reportName: string;
    /**
     * A unix timestamp. start_date will be set to the previous midnight.
     */
    startDate: number;
    /**
     * If you are tracking a single term, then the keyword itself is suffice otherwise, tracking multiple terms must be in JSON form, example '[{"operator":"","word":"http://google.com"},{"operator":"or","word":"#test"},{"operator":"and","word":"test2"}]' Which results in filtering tweets containing 'http://google.com' OR '#test' AND 'test2'. (NOTE) Make sure to URL encode the terms value for multiple terms.
     */
    terms: string;
}
export declare class PostReportsTweetCreateResponse extends SpeakeasyBase {
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
    createTweet?: shared.CreateTweet;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
