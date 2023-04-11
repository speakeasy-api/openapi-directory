import { SpeakeasyBase } from "../../../internal/utils";
import { SecretVersion } from "./secretversion";
/**
 * Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container.
 */
export declare class SecretVolume extends SpeakeasyBase {
    /**
     * The path within the container to mount the secret volume. For example, setting the mount_path as `/etc/secrets` would mount the secret value files under the `/etc/secrets` directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets
     */
    mountPath?: string;
    /**
     * Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function.
     */
    projectId?: string;
    /**
     * Name of the secret in secret manager (not the full resource name).
     */
    secret?: string;
    /**
     * List of secret versions to mount for this secret. If empty, the `latest` version of the secret will be made available in a file named after the secret under the mount point.
     */
    versions?: SecretVersion[];
}
