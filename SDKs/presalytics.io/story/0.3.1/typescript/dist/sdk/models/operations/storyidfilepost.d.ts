import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A pptx or xlsx object from which to start creation of a story
 */
export declare class StoryIdFilePostOpenOfficeXmlDocumentEGXlsxPptxFile extends SpeakeasyBase {
    file?: Uint8Array[];
}
export declare class StoryIdFilePostRequest extends SpeakeasyBase {
    /**
     * A pptx or xlsx file upload or story outline json object
     */
    requestBody: StoryIdFilePostOpenOfficeXmlDocumentEGXlsxPptxFile;
    /**
     * the id from the story object
     */
    id: string;
    /**
     * Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
     */
    includeOutline?: boolean;
    /**
     * A primary key pointing to an obsolete item in the story. Item type is context-dependent
     */
    obsoleteId?: string;
    /**
     * Indicates whether a put or post method would replace the existing contents
     */
    replaceExisting?: boolean;
}
export declare class StoryIdFilePostResponse extends SpeakeasyBase {
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
