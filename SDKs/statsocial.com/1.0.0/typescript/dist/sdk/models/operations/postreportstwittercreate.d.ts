import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostReportsTwitterCreateRequest extends SpeakeasyBase {
    /**
     * Filtering options to be used when creating a filtered report. The options must be in JSON form, example: {'gender':['male'],'ages':['18-24'],'countries':['usa']}
     */
    filter?: string;
    /**
     * (required if twitter_id is not supplied) twitter_handle must be sent with all client requests. Multiple ids are separated by commas.
     */
    twitterHandle?: string;
    /**
     * (required if twitter_handle is not supplied) twitter_id must be sent with all client requests. Multiple handles are separated by commas.
     */
    twitterId?: number;
}
export declare class PostReportsTwitterCreateResponse extends SpeakeasyBase {
    /**
     * Possible reasons include:<br>{success: 0, msg: Invalid API parameters, error_code_msg: API_INVALID_PARAMS}<br>{success: 0, msg: Error please include the 'action' parameter, error_code_msg: API_MISSING_ACTION_PARAMETER}<br>{success: 0, msg: The twitter account provided has no audience, error_code_msg: API_TWITTER_ERROR_INSUFFICIENT_COUNT}
     */
    fourHundredError?: shared.FourHundredError;
    /**
     * Possible reasons include:<br>{success: 0, msg: Invalid API key, error_code_msg: API_INVALID_KEY}<br>{success: 0, msg: The twitter account provided is private, error_code_msg: API_TWITTER_ERROR_PRIVATE}
     */
    fourHundredAndOneError?: shared.FourHundredAndOneError;
    /**
     * Possible reasons include:<br>{success: 0, msg: you are going too fast}<br>{success: 0, msg: Not enough tokens remaining under your application, error_code_msg: API_INSUFFICIENT_TOKENS_REMAINING}
     */
    fourHundredAndThreeError?: shared.FourHundredAndThreeError;
    /**
     * Possible reasons include:<br>{success: 0, msg: Error requesting twitter info, error_code_msg: API_TWITTER_ERROR}<br>{success: 0, msg: Error inserting new twitter report, error_code_msg: API_ERROR_CREATING_TWITTER_ACCOUNT}<br>{success: 0, msg: Error getting application's credentials, error_code_msg: API_ERROR_GETTING_APPLICATION_INFO}}<br>{success: 0, msg: Internal database error, error_code_msg: API_ERROR_DATABASE_INITIATION_ERROR}
     */
    fiveHundredError?: shared.FiveHundredError;
    contentType: string;
    /**
     * Success
     */
    createTwitter?: shared.CreateTwitter;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
