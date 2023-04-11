import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A pptx or xlsx object from which to start creation of a story
 */
export declare class StoryPostFileOpenOfficeXmlDocumentEGXlsxPptxFile extends SpeakeasyBase {
    file?: Uint8Array[];
}
export declare class StoryPostFileRequest extends SpeakeasyBase {
    /**
     * A pptx or xlsx file upload or story outline json object
     */
    requestBody: StoryPostFileOpenOfficeXmlDocumentEGXlsxPptxFile;
    /**
     * Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
     */
    includeOutline?: boolean;
}
export declare class StoryPostFileResponse extends SpeakeasyBase {
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
