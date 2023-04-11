import { SpeakeasyBase } from "../../../internal/utils";
import { ActingUser } from "./actinguser";
import { ServingConfig } from "./servingconfig";
/**
 * The deploy status of the version. For a successful deploy, call [`CreateVersion`](sites.versions/create) to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. Note that if you leave the version in the `CREATED` state for more than 12 hours, the system will automatically mark the version as `ABANDONED`. You can also change the status of a version to `DELETED` by calling [`DeleteVersion`](sites.versions/delete).
 */
export declare enum VersionStatusEnum {
    VersionStatusUnspecified = "VERSION_STATUS_UNSPECIFIED",
    Created = "CREATED",
    Finalized = "FINALIZED",
    Deleted = "DELETED",
    Abandoned = "ABANDONED",
    Expired = "EXPIRED",
    Cloning = "CLONING"
}
/**
 * A `Version` is a configuration and a collection of static files which determine how a site is displayed.
 */
export declare class Version extends SpeakeasyBase {
    /**
     * The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
     */
    config?: ServingConfig;
    /**
     * Output only. The time at which the version was created.
     */
    createTime?: string;
    /**
     * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
     */
    createUser?: ActingUser;
    /**
     * Output only. The time at which the version was `DELETED`.
     */
    deleteTime?: string;
    /**
     * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
     */
    deleteUser?: ActingUser;
    /**
     * Output only. The total number of files associated with the version. This value is calculated after a version is `FINALIZED`.
     */
    fileCount?: string;
    /**
     * Output only. The time at which the version was `FINALIZED`.
     */
    finalizeTime?: string;
    /**
     * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
     */
    finalizeUser?: ActingUser;
    /**
     * The labels used for extra metadata and/or filtering.
     */
    labels?: Record<string, string>;
    /**
     * The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     */
    name?: string;
    /**
     * The deploy status of the version. For a successful deploy, call [`CreateVersion`](sites.versions/create) to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. Note that if you leave the version in the `CREATED` state for more than 12 hours, the system will automatically mark the version as `ABANDONED`. You can also change the status of a version to `DELETED` by calling [`DeleteVersion`](sites.versions/delete).
     */
    status?: VersionStatusEnum;
    /**
     * Output only. The total stored bytesize of the version. This value is calculated after a version is `FINALIZED`.
     */
    versionBytes?: string;
}
