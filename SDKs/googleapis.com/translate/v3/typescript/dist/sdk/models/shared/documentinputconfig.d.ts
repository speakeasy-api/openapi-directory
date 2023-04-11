import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * A document translation request input config.
 */
export declare class DocumentInputConfig extends SpeakeasyBase {
    /**
     * Document's content represented as a stream of bytes.
     */
    content?: string;
    /**
     * The Google Cloud Storage location for the input content.
     */
    gcsSource?: GcsSource;
    /**
     * Specifies the input document's mime_type. If not specified it will be determined using the file extension for gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently supported mime types are: - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
     */
    mimeType?: string;
}
