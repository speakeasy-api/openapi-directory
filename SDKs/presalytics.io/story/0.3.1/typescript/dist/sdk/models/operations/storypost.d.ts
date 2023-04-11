import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryPostRequest extends SpeakeasyBase {
    /**
     * Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
     */
    includeOutline?: boolean;
    /**
     * A story outline json object
     */
    outline: shared.Outline;
}
export declare class StoryPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unsupported Media Type
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * Success responses with story object
     */
    story?: shared.Story;
}
