import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdSessionPostRequest extends SpeakeasyBase {
    /**
     * Collaborator user id and permission type
     */
    createSessionRequest: shared.CreateSessionRequest;
    /**
     * the id from the story object
     */
    id: string;
}
export declare class StoryIdSessionPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * A new session object
     */
    session?: shared.Session;
}
