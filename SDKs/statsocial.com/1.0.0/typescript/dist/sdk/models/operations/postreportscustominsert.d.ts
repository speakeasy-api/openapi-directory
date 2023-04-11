import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostReportsCustomInsertRequest extends SpeakeasyBase {
    /**
     * List of twitter ids, separated by commas, to be inserted into report. Ids must be enclosed with brackets ie. [177490485] or [177490485,23423434]
     */
    ids: any[];
    /**
     * Upload hash to be used for inserting handles
     */
    uploadHash: string;
}
export declare class PostReportsCustomInsertResponse extends SpeakeasyBase {
    /**
     * Possible reasons include:<br>{success: 0, msg: Invalid API parameters, error_code_msg: API_INVALID_PARAMS}<br>{success: 0, msg: Error please include the 'action' parameter, error_code_msg: API_MISSING_ACTION_PARAMETER}<br>{success: 0, msg: IDS array is too long or in an incorrect format, error_code_msg: API_INVALID_IDS}
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
     * {success: 0, msg: The upload hash provided does not exist, error_code_msg: UPLOAD_HASH_DOES_NOT_EXIST}
     */
    fourHundredAndFourError?: shared.FourHundredAndFourError;
    /**
     * Possible reasons include:<br>{success: 0, msg: Error getting application's credentials, error_code_msg: API_ERROR_GETTING_APPLICATION_INFO}<br>{success: 0, msg: Internal database error, error_code_msg: API_ERROR_DATABASE_INITIATION_ERROR}<br>{success: 0, msg: Error trying to insert relations to custom, error_code_msg: API_ERROR_INSERTING_TO_CUSTOM}
     */
    fiveHundredError?: shared.FiveHundredError;
    contentType: string;
    /**
     * Success
     */
    customInsert?: shared.CustomInsert;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
