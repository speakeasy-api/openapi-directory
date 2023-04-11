import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class PendingEmail extends SpeakeasyBase {
    /**
     * ID of the email
     */
    id?: number;
    /**
     * Email Address of the pending email
     */
    mailbox?: string;
    mimeEmailPayload?: EmbeddedResource;
}
