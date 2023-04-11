import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdMessagesGetRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
}
export declare class StoryIdMessagesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An Array of conversation messages
     */
    messages?: shared.Message[];
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
}
