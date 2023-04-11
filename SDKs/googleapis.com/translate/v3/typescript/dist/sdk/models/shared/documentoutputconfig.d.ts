import { SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";
/**
 * A document translation request output config.
 */
export declare class DocumentOutputConfig extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location for the output content.
     */
    gcsDestination?: GcsDestination;
    /**
     * Optional. Specifies the translated document's mime_type. If not specified, the translated file's mime type will be the same as the input file's mime type. Currently only support the output mime type to be the same as input mime type. - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
     */
    mimeType?: string;
}
