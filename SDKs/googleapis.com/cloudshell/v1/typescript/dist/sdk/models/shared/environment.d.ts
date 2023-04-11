import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Current execution state of this environment.
 */
export declare enum EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Suspended = "SUSPENDED",
    Pending = "PENDING",
    Running = "RUNNING",
    Deleting = "DELETING"
}
/**
 * A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default".
 */
export declare class Environment extends SpeakeasyBase {
    /**
     * Required. Immutable. Full path to the Docker image used to run this environment, e.g. "gcr.io/dev-con/cloud-devshell:latest".
     */
    dockerImage?: string;
    /**
     * Output only. The environment's identifier, unique among the user's environments.
     */
    id?: string;
    /**
     * Immutable. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the email address of the user to whom this environment belongs, and `{environment_id}` is the identifier of this environment. For example, `users/someone@example.com/environments/default`.
     */
    name?: string;
    /**
     * Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the AddPublicKey and RemovePublicKey methods.
     */
    publicKeys?: string[];
    /**
     * Output only. Host to which clients can connect to initiate SSH sessions with the environment.
     */
    sshHost?: string;
    /**
     * Output only. Port to which clients can connect to initiate SSH sessions with the environment.
     */
    sshPort?: number;
    /**
     * Output only. Username that clients should use when initiating SSH sessions with the environment.
     */
    sshUsername?: string;
    /**
     * Output only. Current execution state of this environment.
     */
    state?: EnvironmentStateEnum;
    /**
     * Output only. Host to which clients can connect to initiate HTTPS or WSS connections with the environment.
     */
    webHost?: string;
}
