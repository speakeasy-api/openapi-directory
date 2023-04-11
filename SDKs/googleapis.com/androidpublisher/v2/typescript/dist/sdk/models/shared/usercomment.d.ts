import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceMetadata } from "./devicemetadata";
import { Timestamp } from "./timestamp";
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
    deviceMetadata?: DeviceMetadata;
    lastModified?: Timestamp;
    /**
     * Untranslated text of the review, in the case where the review has been translated. If the review has not been translated this is left blank.
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
     * Number of users who have given this review a thumbs down
     */
    thumbsDownCount?: number;
    /**
     * Number of users who have given this review a thumbs up
     */
    thumbsUpCount?: number;
}
