import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an announcement set by an administrator.
 *
 * @see {@link https://docs.joinmastodon.org/entities/announcement/}
 */
export declare class Announcement extends SpeakeasyBase {
    /**
     * Whether the announcement has a start/end time.
     */
    allDay: boolean;
    /**
     * When the announcement was created.
     */
    createdAt: string;
    /**
     * When the future announcement will end. ISO 8601 Datetime.
     */
    endsAt?: string;
    /**
     * The announcement id. Cast from an integer, but not guaranteed to be a number.
     */
    id: string;
    /**
     * Whether the announcement is currently active.
     */
    published: boolean;
    /**
     * Whether the announcement has been read by the user.
     */
    read: boolean;
    /**
     * When the future announcement was scheduled. ISO 8601 Datetime.
     */
    scheduledAt?: string;
    /**
     * When the future announcement will start. ISO 8601 Datetime.
     */
    startsAt?: string;
    /**
     * The content of the announcement.
     */
    text: string;
    /**
     * When the announcement was last updated. ISO 8601 Datetime.
     */
    updatedAt: string;
}
