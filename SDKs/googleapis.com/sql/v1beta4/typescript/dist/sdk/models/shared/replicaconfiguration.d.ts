import { SpeakeasyBase } from "../../../internal/utils";
import { MySqlReplicaConfiguration } from "./mysqlreplicaconfiguration";
/**
 * Read-replica configuration for connecting to the primary instance.
 */
export declare class ReplicaConfiguration extends SpeakeasyBase {
    /**
     * Specifies if the replica is the failover target. If the field is set to `true` the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance.
     */
    failoverTarget?: boolean;
    /**
     * This is always `sql#replicaConfiguration`.
     */
    kind?: string;
    /**
     * Read-replica configuration specific to MySQL databases.
     */
    mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
}
