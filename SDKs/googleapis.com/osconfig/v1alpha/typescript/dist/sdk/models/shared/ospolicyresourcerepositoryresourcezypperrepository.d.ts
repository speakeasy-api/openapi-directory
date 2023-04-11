import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.
 */
export declare class OSPolicyResourceRepositoryResourceZypperRepository extends SpeakeasyBase {
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
     * Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts.
     */
    id?: string;
}
