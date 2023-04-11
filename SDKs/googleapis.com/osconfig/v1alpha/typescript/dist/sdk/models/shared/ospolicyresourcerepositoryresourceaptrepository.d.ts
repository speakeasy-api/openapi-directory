import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Type of archive files in this repository.
 */
export declare enum OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED",
    Deb = "DEB",
    DebSrc = "DEB_SRC"
}
/**
 * Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
 */
export declare class OSPolicyResourceRepositoryResourceAptRepository extends SpeakeasyBase {
    /**
     * Required. Type of archive files in this repository.
     */
    archiveType?: OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum;
    /**
     * Required. List of components for this repository. Must contain at least one item.
     */
    components?: string[];
    /**
     * Required. Distribution of this repository.
     */
    distribution?: string;
    /**
     * URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.
     */
    gpgKey?: string;
    /**
     * Required. URI for this repository.
     */
    uri?: string;
}
