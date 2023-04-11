import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of archive files in this repository. The default behavior is DEB.
 */
export declare enum AptRepositoryArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED",
    Deb = "DEB",
    DebSrc = "DEB_SRC"
}
/**
 * Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
 */
export declare class AptRepository extends SpeakeasyBase {
    /**
     * Type of archive files in this repository. The default behavior is DEB.
     */
    archiveType?: AptRepositoryArchiveTypeEnum;
    /**
     * Required. List of components for this repository. Must contain at least one item.
     */
    components?: string[];
    /**
     * Required. Distribution of this repository.
     */
    distribution?: string;
    /**
     * URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy.
     */
    gpgKey?: string;
    /**
     * Required. URI for this repository.
     */
    uri?: string;
}
