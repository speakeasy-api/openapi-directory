import { SpeakeasyBase } from "../../../internal/utils";
import { ActingUser } from "./actinguser";
import { Version } from "./version";
/**
 * Explains the reason for the release. Specify a value for this field only when creating a `SITE_DISABLE` type release.
 */
export declare enum ReleaseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Deploy = "DEPLOY",
    Rollback = "ROLLBACK",
    SiteDisable = "SITE_DISABLE"
}
/**
 *  A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
 */
export declare class Release extends SpeakeasyBase {
    /**
     * The deploy description when the release was created. The value can be up to 512 characters.
     */
    message?: string;
    /**
     * Output only. The unique identifier for the release, in either of the following formats: - sites/SITE_ID/releases/RELEASE_ID - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID This name is provided in the response body when you call [`releases.create`](sites.releases/create) or [`channels.releases.create`](sites.channels.releases/create).
     */
    name?: string;
    /**
     * Output only. The time at which the version is set to be public.
     */
    releaseTime?: string;
    /**
     * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
     */
    releaseUser?: ActingUser;
    /**
     * Explains the reason for the release. Specify a value for this field only when creating a `SITE_DISABLE` type release.
     */
    type?: ReleaseTypeEnum;
    /**
     * A `Version` is a configuration and a collection of static files which determine how a site is displayed.
     */
    version?: Version;
}
