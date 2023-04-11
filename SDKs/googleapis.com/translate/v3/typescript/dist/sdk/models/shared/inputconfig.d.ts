import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * Input configuration for BatchTranslateText request.
 */
export declare class InputConfig extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location for the input content.
     */
    gcsSource?: GcsSource;
    /**
     * Optional. Can be "text/plain" or "text/html". For `.tsv`, "text/html" is used if mime_type is missing. For `.html`, this field must be "text/html" or empty. For `.txt`, this field must be "text/plain" or empty.
     */
    mimeType?: string;
}
