import { SpeakeasyBase } from "../../../internal/utils";
import { Actor, ActorInput } from "./actor";
/**
 * Represents a file attached to a support case.
 */
export declare class Attachment extends SpeakeasyBase {
    /**
     * Output only. The time at which the attachment was created.
     */
    createTime?: string;
    /**
     * An object containing information about the effective user and authenticated principal responsible for an action.
     */
    creator?: Actor;
    /**
     * The filename of the attachment (e.g. `"graph.jpg"`).
     */
    filename?: string;
    /**
     * Output only. The MIME type of the attachment (e.g. text/plain).
     */
    mimeType?: string;
    /**
     * Output only. The resource name of the attachment.
     */
    name?: string;
    /**
     * Output only. The size of the attachment in bytes.
     */
    sizeBytes?: string;
}
/**
 * Represents a file attached to a support case.
 */
export declare class AttachmentInput extends SpeakeasyBase {
    /**
     * An object containing information about the effective user and authenticated principal responsible for an action.
     */
    creator?: ActorInput;
    /**
     * The filename of the attachment (e.g. `"graph.jpg"`).
     */
    filename?: string;
}
