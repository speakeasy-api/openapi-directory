import { SpeakeasyBase } from "../../../internal/utils";
import { CountryTargeting } from "./countrytargeting";
import { LocalizedText } from "./localizedtext";
/**
 * The status of the release.
 */
export declare enum TrackReleaseStatusEnum {
    StatusUnspecified = "statusUnspecified",
    Draft = "draft",
    InProgress = "inProgress",
    Halted = "halted",
    Completed = "completed"
}
/**
 * A release within a track.
 */
export declare class TrackRelease extends SpeakeasyBase {
    /**
     * Country targeting specification.
     */
    countryTargeting?: CountryTargeting;
    /**
     * In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates.
     */
    inAppUpdatePriority?: number;
    /**
     * The release name. Not required to be unique. If not set, the name is generated from the APK's version_name. If the release contains multiple APKs, the name is generated from the date.
     */
    name?: string;
    /**
     * A description of what is new in this release.
     */
    releaseNotes?: LocalizedText[];
    /**
     * The status of the release.
     */
    status?: TrackReleaseStatusEnum;
    /**
     * Fraction of users who are eligible for a staged release. 0 < fraction < 1. Can only be set when status is "inProgress" or "halted".
     */
    userFraction?: number;
    /**
     * Version codes of all APKs in the release. Must include version codes to retain from previous releases.
     */
    versionCodes?: string[];
}
