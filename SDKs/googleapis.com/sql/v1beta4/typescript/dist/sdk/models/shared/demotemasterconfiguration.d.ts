import { SpeakeasyBase } from "../../../internal/utils";
import { DemoteMasterMySqlReplicaConfiguration } from "./demotemastermysqlreplicaconfiguration";
/**
 * Read-replica configuration for connecting to the on-premises primary instance.
 */
export declare class DemoteMasterConfiguration extends SpeakeasyBase {
    /**
     * This is always `sql#demoteMasterConfiguration`.
     */
    kind?: string;
    /**
     * Read-replica configuration specific to MySQL databases.
     */
    mysqlReplicaConfiguration?: DemoteMasterMySqlReplicaConfiguration;
}
