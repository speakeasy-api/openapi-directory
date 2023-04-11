import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A reply to a comment on a file.
 */
export declare class Reply extends SpeakeasyBase {
    /**
     * The action the reply performed to the parent comment. Valid values are:
     *
     * @remarks
     * - resolve
     * - reopen
     */
    action?: string;
    /**
     * Information about a Drive user.
     */
    author?: User;
    /**
     * The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if no action is specified.
     */
    content?: string;
    /**
     * The time at which the reply was created (RFC 3339 date-time).
     */
    createdTime?: Date;
    /**
     * Whether the reply has been deleted. A deleted reply has no content.
     */
    deleted?: boolean;
    /**
     * The content of the reply with HTML formatting.
     */
    htmlContent?: string;
    /**
     * The ID of the reply.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#reply".
     */
    kind?: string;
    /**
     * The last time the reply was modified (RFC 3339 date-time).
     */
    modifiedTime?: Date;
}
