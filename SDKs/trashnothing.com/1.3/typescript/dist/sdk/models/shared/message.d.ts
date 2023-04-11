import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
import { Post } from "./post";
/**
 * A message between two users.
 */
export declare class Message extends SpeakeasyBase {
    /**
     * The content of the message.
     */
    content?: string;
    /**
     * The UTC date and time when the message was sent.
     */
    date?: Date;
    /**
     * Every message a user receives is made available via the API and is sent to the user by email.  Some messages may contain unsupported attachments that are not available by the API but are emailed to the user (eg. documents, videos, zip files). The email_attachments field provides the names of all the unsupported attachments that were emailed to the user (will be null if there are no unsupported attachments).
     *
     * @remarks
     *
     */
    emailAttachments?: string[];
    /**
     * The ID of the user that sent the message (the sender).
     */
    fromUserId?: string;
    messageId?: string;
    /**
     * Details about the photos associated with this message (may be null if there are no photos).
     */
    photos?: Photo[];
    /**
     * An offer, wanted, admin, taken or received post.
     */
    post?: Post;
    /**
     * Because many messages are received by email, all messages have a subject. The subject is often useful to allow the recipient to determine which post a message may be referring to.  In rare cases, some senders send emails with a subject and but no email body which causes the message content to be an empty string.
     *
     * @remarks
     *
     */
    subject?: string;
    /**
     * The ID of the user that received the message (the recipient).
     */
    toUserId?: string;
}
