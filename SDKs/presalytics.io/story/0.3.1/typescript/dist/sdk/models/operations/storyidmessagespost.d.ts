import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdMessagesPostRequest extends SpeakeasyBase {
    /**
     * The message text
     */
    requestBody: string;
    /**
     * the id from the story object
     */
    id: string;
}
export declare class StoryIdMessagesPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
}
