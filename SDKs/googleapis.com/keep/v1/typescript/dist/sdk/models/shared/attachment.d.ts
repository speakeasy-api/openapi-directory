import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An attachment to a note.
 */
export declare class Attachment extends SpeakeasyBase {
    /**
     * The MIME types (IANA media types) in which the attachment is available.
     */
    mimeType?: string[];
    /**
     * The resource name;
     */
    name?: string;
}
