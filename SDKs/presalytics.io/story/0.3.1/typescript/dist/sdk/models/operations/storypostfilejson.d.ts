import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryPostFileJsonRequest extends SpeakeasyBase {
    /**
     * A json-formatted object that includes a base64 encoded file (file encoded utf-8)
     */
    fileUpload?: shared.FileUpload;
    /**
     * Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
     */
    includeOutline?: boolean;
}
export declare class StoryPostFileJsonResponse extends SpeakeasyBase {
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
