import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
/**
 * Request to modify the attachments of a student submission.
 */
export declare class ModifyAttachmentsRequest extends SpeakeasyBase {
    /**
     * Attachments to add. A student submission may not have more than 20 attachments. Form attachments are not supported.
     */
    addAttachments?: Attachment[];
}
