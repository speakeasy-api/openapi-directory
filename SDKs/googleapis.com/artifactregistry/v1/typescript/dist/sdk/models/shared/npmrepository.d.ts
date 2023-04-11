import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of the publicly available Npm repositories supported by Artifact Registry.
 */
export declare enum NpmRepositoryPublicRepositoryEnum {
    PublicRepositoryUnspecified = "PUBLIC_REPOSITORY_UNSPECIFIED",
    Npmjs = "NPMJS"
}
/**
 * Configuration for a Npm remote repository.
 */
export declare class NpmRepository extends SpeakeasyBase {
    /**
     * One of the publicly available Npm repositories supported by Artifact Registry.
     */
    publicRepository?: NpmRepositoryPublicRepositoryEnum;
}
