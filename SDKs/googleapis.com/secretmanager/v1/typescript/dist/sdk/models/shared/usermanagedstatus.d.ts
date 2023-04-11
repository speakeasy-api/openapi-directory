import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaStatus } from "./replicastatus";
/**
 * The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.
 */
export declare class UserManagedStatus extends SpeakeasyBase {
    /**
     * Output only. The list of replica statuses for the SecretVersion.
     */
    replicas?: ReplicaStatus[];
}
