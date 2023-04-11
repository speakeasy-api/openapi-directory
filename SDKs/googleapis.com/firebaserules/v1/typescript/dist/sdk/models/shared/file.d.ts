import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `File` containing source content.
 */
export declare class File extends SpeakeasyBase {
    /**
     * Required. Textual Content.
     */
    content?: string;
    /**
     * Fingerprint (e.g. github sha) associated with the `File`.
     */
    fingerprint?: string;
    /**
     * Required. File name.
     */
    name?: string;
}
