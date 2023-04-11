import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserFeedback extends SpeakeasyBase {
    /**
     * The percent of feedback that this user has received in the last year that was positive. May be null if a user has not received enough feedback to calculate a percentage.
     *
     * @remarks
     *
     */
    percentPositive?: number;
    /**
     * If the current user can leave positive or negative feedback on this user then restriction is null. <br /><br /> Otherwise, restriction is set to a string that explains why feedback is currently restricted and what type of feedback is restricted. The string will be one of the following:  no-recent-messages, negative-score, moderator, [days]-day-wait-for-negative <br /><br /> - **no-recent-messages**: The current user has not received any messages from this user in the last 30 days. <br /> - **negative-score**: The current user has a negative feedback and will not be able to leave feedback until their score is >= 0. <br /> - **moderator**: The user is a moderator and leaving feedback on moderators is not currently supported. <br /> - **[days]-day-wait-for-negative**: Positive feedback is not restricted but the current user must wait
     *
     * @remarks
     *   some number of days before they will be able to leave negative feedback on this user.  This string can
     *   change depending on the number of days.  For example, when the current user must wait one day, the
     *   string will be '1-day-wait-for-negative'.  A wait is necessary because a lot of negative feedback results
     *   from communication issues that are resolved with more time.
     *
     */
    restriction?: string;
    /**
     * The feedback score of this user.  Higher scores are better.   Scores are calculated by substracting the total number of negative feedback from the total number of positive feedback that a user has received.  May be null if a user has not received enough feedback to calculate a score.
     *
     * @remarks
     *
     */
    score?: number;
}
/**
 * User data
 */
export declare class User extends SpeakeasyBase {
    /**
     * A short bio a user has written about themselves to help other members get to know them better. May be null if the user has not written anything about themselves.
     *
     * @remarks
     *
     */
    aboutMe?: string;
    /**
     * A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.
     *
     * @remarks
     *
     */
    country?: string;
    feedback?: UserFeedback;
    /**
     * The first name of the user (may be null).
     */
    firstname?: string;
    /**
     * The last name of the user (may be null).
     */
    lastname?: string;
    /**
     * The date and time when the user first became publicly active on a group (the date may be older than when the user signed up).
     */
    memberSince?: string;
    /**
     * A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
     *
     * @remarks
     *
     */
    profileImage?: string;
    /**
     * An estimate of how many seconds it takes this user to reply to messages. May be null when there is not enough data to calculate an estimate.
     *
     * @remarks
     *
     */
    replyTime?: number;
    userId?: string;
    /**
     * A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
     *
     * @remarks
     *
     */
    username?: string;
}
