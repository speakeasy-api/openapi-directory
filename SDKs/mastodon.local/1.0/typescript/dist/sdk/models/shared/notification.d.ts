import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Status } from "./status";
/**
 * The type of event that resulted in the notification.
 */
export declare enum NotificationTypeEnum {
    Follow = "follow",
    FollowRequest = "follow_request",
    Mention = "mention",
    Reblog = "reblog",
    Favourite = "favourite",
    Poll = "poll",
    Status = "status"
}
/**
 * Represents a notification of an event relevant to the user.
 *
 * @see {@link https://docs.joinmastodon.org/entities/notification/}
 */
export declare class Notification extends SpeakeasyBase {
    /**
     * Represents a user of Mastodon and their associated profile.
     */
    account: Account;
    /**
     * The timestamp of the notification. ISO 8601 Datetime.
     */
    createdAt: Date;
    /**
     * The id of the notification in the database. Cast from an integer, but not guaranteed to be a number.
     */
    id: string;
    /**
     * Represents a status posted by an account.
     */
    status?: Status;
    /**
     * The type of event that resulted in the notification.
     */
    type: NotificationTypeEnum;
}
