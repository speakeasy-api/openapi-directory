import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdSessionsGetRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
    /**
     * Indicate whether the returned object should include child relationships
     */
    includeRelationships?: boolean;
}
export declare class StoryIdSessionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * An array of session objects
     */
    sessions?: shared.Session[];
}
