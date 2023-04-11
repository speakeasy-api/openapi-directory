import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticStatus } from "./automaticstatus";
import { UserManagedStatus } from "./usermanagedstatus";
/**
 * The replication status of a SecretVersion.
 */
export declare class ReplicationStatus extends SpeakeasyBase {
    /**
     * The replication status of a SecretVersion using automatic replication. Only populated if the parent Secret has an automatic replication policy.
     */
    automatic?: AutomaticStatus;
    /**
     * The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.
     */
    userManaged?: UserManagedStatus;
}
