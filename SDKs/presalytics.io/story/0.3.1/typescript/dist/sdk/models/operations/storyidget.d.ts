import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdGetRequest extends SpeakeasyBase {
    /**
     * Pull a story object with associated collaborator user, permission, and session data(faster if cached from prior api call)
     */
    full?: boolean;
    /**
     * the id from the story object
     */
    id: string;
    /**
     * Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
     */
    includeOutline?: boolean;
    /**
     * Indicate whether the returned object should include child relationships
     */
    includeRelationships?: boolean;
    /**
     * Force the api reload the `Story full` object
     */
    refreshCache?: boolean;
}
export declare class StoryIdGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * Success responses with story object
     */
    story?: shared.Story;
}
