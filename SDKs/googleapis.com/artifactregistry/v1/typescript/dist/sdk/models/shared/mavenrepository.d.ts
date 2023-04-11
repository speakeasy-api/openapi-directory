import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of the publicly available Maven repositories supported by Artifact Registry.
 */
export declare enum MavenRepositoryPublicRepositoryEnum {
    PublicRepositoryUnspecified = "PUBLIC_REPOSITORY_UNSPECIFIED",
    MavenCentral = "MAVEN_CENTRAL"
}
/**
 * Configuration for a Maven remote repository.
 */
export declare class MavenRepository extends SpeakeasyBase {
    /**
     * One of the publicly available Maven repositories supported by Artifact Registry.
     */
    publicRepository?: MavenRepositoryPublicRepositoryEnum;
}
