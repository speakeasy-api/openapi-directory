import { SpeakeasyBase } from "../../../internal/utils";
import { UserManaged } from "./usermanaged";
/**
 * A policy that defines the replication configuration of data.
 */
export declare class Replication extends SpeakeasyBase {
    /**
     * A replication policy that replicates the Secret payload without any restrictions.
     */
    automatic?: Record<string, any>;
    /**
     * A replication policy that replicates the Secret payload into the locations specified in Secret.replication.user_managed.replicas
     */
    userManaged?: UserManaged;
}
