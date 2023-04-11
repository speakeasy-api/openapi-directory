import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of the publicly available Docker repositories supported by Artifact Registry.
 */
export declare enum DockerRepositoryPublicRepositoryEnum {
    PublicRepositoryUnspecified = "PUBLIC_REPOSITORY_UNSPECIFIED",
    DockerHub = "DOCKER_HUB"
}
/**
 * Configuration for a Docker remote repository.
 */
export declare class DockerRepository extends SpeakeasyBase {
    /**
     * One of the publicly available Docker repositories supported by Artifact Registry.
     */
    publicRepository?: DockerRepositoryPublicRepositoryEnum;
}
