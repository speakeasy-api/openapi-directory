import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachmentEditFields extends SpeakeasyBase {
    /**
     * Filename of the attachment (with file extensison)
     */
    filename?: string;
    /**
     * Public accessible URL with the desired file contents. (LIMIT: 100MB)
     */
    url?: string;
}
