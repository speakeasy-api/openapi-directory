import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Version policy defines the versions that the registry will accept.
 */
export declare enum MavenRepositoryConfigVersionPolicyEnum {
    VersionPolicyUnspecified = "VERSION_POLICY_UNSPECIFIED",
    Release = "RELEASE",
    Snapshot = "SNAPSHOT"
}
/**
 * MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
 */
export declare class MavenRepositoryConfig extends SpeakeasyBase {
    /**
     * The repository with this flag will allow publishing the same snapshot versions.
     */
    allowSnapshotOverwrites?: boolean;
    /**
     * Version policy defines the versions that the registry will accept.
     */
    versionPolicy?: MavenRepositoryConfigVersionPolicyEnum;
}
