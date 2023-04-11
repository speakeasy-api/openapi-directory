import { SpeakeasyBase } from "../../../internal/utils";
import { DockerRepositoryConfig } from "./dockerrepositoryconfig";
import { MavenRepositoryConfig } from "./mavenrepositoryconfig";
import { RemoteRepositoryConfig } from "./remoterepositoryconfig";
import { VirtualRepositoryConfig } from "./virtualrepositoryconfig";
/**
 * The format of packages that are stored in the repository.
 */
export declare enum RepositoryFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Docker = "DOCKER",
    Maven = "MAVEN",
    Npm = "NPM",
    Apt = "APT",
    Yum = "YUM",
    Python = "PYTHON",
    Kfp = "KFP"
}
/**
 * The mode of the repository.
 */
export declare enum RepositoryModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    StandardRepository = "STANDARD_REPOSITORY",
    VirtualRepository = "VIRTUAL_REPOSITORY",
    RemoteRepository = "REMOTE_REPOSITORY"
}
/**
 * A Repository for storing artifacts with a specific format.
 */
export declare class Repository extends SpeakeasyBase {
    /**
     * Output only. The time when the repository was created.
     */
    createTime?: string;
    /**
     * The user-provided description of the repository.
     */
    description?: string;
    /**
     * DockerRepositoryConfig is docker related repository details. Provides additional configuration details for repositories of the docker format type.
     */
    dockerConfig?: DockerRepositoryConfig;
    /**
     * The format of packages that are stored in the repository.
     */
    format?: RepositoryFormatEnum;
    /**
     * The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.
     */
    kmsKeyName?: string;
    /**
     * Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.
     */
    labels?: Record<string, string>;
    /**
     * MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
     */
    mavenConfig?: MavenRepositoryConfig;
    /**
     * The mode of the repository.
     */
    mode?: RepositoryModeEnum;
    /**
     * The name of the repository, for example: "projects/p1/locations/us-central1/repositories/repo1".
     */
    name?: string;
    /**
     * Remote repository configuration.
     */
    remoteRepositoryConfig?: RemoteRepositoryConfig;
    /**
     * Output only. If set, the repository satisfies physical zone separation.
     */
    satisfiesPzs?: boolean;
    /**
     * Output only. The size, in bytes, of all artifact storage in this repository. Repositories that are generally available or in public preview use this to calculate storage costs.
     */
    sizeBytes?: string;
    /**
     * Output only. The time when the repository was last updated.
     */
    updateTime?: string;
    /**
     * Virtual repository configuration.
     */
    virtualRepositoryConfig?: VirtualRepositoryConfig;
}
/**
 * A Repository for storing artifacts with a specific format.
 */
export declare class RepositoryInput extends SpeakeasyBase {
    /**
     * The user-provided description of the repository.
     */
    description?: string;
    /**
     * DockerRepositoryConfig is docker related repository details. Provides additional configuration details for repositories of the docker format type.
     */
    dockerConfig?: DockerRepositoryConfig;
    /**
     * The format of packages that are stored in the repository.
     */
    format?: RepositoryFormatEnum;
    /**
     * The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.
     */
    kmsKeyName?: string;
    /**
     * Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.
     */
    labels?: Record<string, string>;
    /**
     * MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
     */
    mavenConfig?: MavenRepositoryConfig;
    /**
     * The mode of the repository.
     */
    mode?: RepositoryModeEnum;
    /**
     * The name of the repository, for example: "projects/p1/locations/us-central1/repositories/repo1".
     */
    name?: string;
    /**
     * Remote repository configuration.
     */
    remoteRepositoryConfig?: RemoteRepositoryConfig;
    /**
     * Virtual repository configuration.
     */
    virtualRepositoryConfig?: VirtualRepositoryConfig;
}
