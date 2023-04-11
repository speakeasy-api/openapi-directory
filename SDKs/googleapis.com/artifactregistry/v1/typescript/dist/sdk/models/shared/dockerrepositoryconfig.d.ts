import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DockerRepositoryConfig is docker related repository details. Provides additional configuration details for repositories of the docker format type.
 */
export declare class DockerRepositoryConfig extends SpeakeasyBase {
    /**
     * The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
     */
    immutableTags?: boolean;
}
