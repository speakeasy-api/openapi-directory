import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.
 */
export declare class YumRepository extends SpeakeasyBase {
    /**
     * Required. The location of the repository directory.
     */
    baseUrl?: string;
    /**
     * The display name of the repository.
     */
    displayName?: string;
    /**
     * URIs of GPG keys.
     */
    gpgKeys?: string[];
    /**
     * Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.
     */
    id?: string;
}
