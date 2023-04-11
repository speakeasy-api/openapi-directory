import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A representation of a text snippet.
 */
export declare class TextSnippet extends SpeakeasyBase {
    /**
     * Required. The content of the text snippet as a string. Up to 250000 characters long.
     */
    content?: string;
    /**
     * Output only. HTTP URI where you can download the content.
     */
    contentUri?: string;
    /**
     * Optional. The format of content. Currently the only two allowed values are "text/html" and "text/plain". If left blank, the format is automatically determined from the type of the uploaded content.
     */
    mimeType?: string;
}
