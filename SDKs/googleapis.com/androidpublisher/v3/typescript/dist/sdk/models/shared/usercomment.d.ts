import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceMetadata } from "./devicemetadata";
import { Timestamp } from "./timestamp";
/**
 * User entry from conversation between user and developer.
 */
export declare class UserComment extends SpeakeasyBase {
    /**
     * Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent.
     */
    androidOsVersion?: number;
    /**
     * Integer version code of the app as installed at the time the review was written. May be absent.
     */
    appVersionCode?: number;
    /**
     * String version name of the app as installed at the time the review was written. May be absent.
     */
    appVersionName?: string;
    /**
     * Codename for the reviewer's device, e.g. klte, flounder. May be absent.
     */
    device?: string;
    /**
     * Characteristics of the user's device.
     */
    deviceMetadata?: DeviceMetadata;
    /**
     * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
     */
    lastModified?: Timestamp;
    /**
     * Untranslated text of the review, where the review was translated. If the review was not translated this is left blank.
     */
    originalText?: string;
    /**
     * Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent.
     */
    reviewerLanguage?: string;
    /**
     * The star rating associated with the review, from 1 to 5.
     */
    starRating?: number;
    /**
     * The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character.
     */
    text?: string;
    /**
     * Number of users who have given this review a thumbs down.
     */
    thumbsDownCount?: number;
    /**
     * Number of users who have given this review a thumbs up.
     */
    thumbsUpCount?: number;
}
