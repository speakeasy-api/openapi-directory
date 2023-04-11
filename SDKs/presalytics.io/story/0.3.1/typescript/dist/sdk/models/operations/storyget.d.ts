import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryGetRequest extends SpeakeasyBase {
    /**
     * Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
     */
    includeOutline?: boolean;
    /**
     * Indicate whether the returned object should include child relationships
     */
    includeRelationships?: boolean;
}
export declare class StoryGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * List of stories for this user
     */
    stories?: shared.Story[];
}
