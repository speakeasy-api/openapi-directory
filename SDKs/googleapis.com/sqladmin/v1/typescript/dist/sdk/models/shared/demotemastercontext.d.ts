import { SpeakeasyBase } from "../../../internal/utils";
import { DemoteMasterConfiguration } from "./demotemasterconfiguration";
/**
 * Database instance demote primary instance context.
 */
export declare class DemoteMasterContext extends SpeakeasyBase {
    /**
     * This is always `sql#demoteMasterContext`.
     */
    kind?: string;
    /**
     * The name of the instance which will act as on-premises primary instance in the replication setup.
     */
    masterInstanceName?: string;
    /**
     * Read-replica configuration for connecting to the on-premises primary instance.
     */
    replicaConfiguration?: DemoteMasterConfiguration;
    /**
     * Flag to skip replication setup on the instance.
     */
    skipReplicationSetup?: boolean;
    /**
     * Verify the GTID consistency for demote operation. Default value: `True`. Setting this flag to `false` enables you to bypass the GTID consistency check between on-premises primary instance and Cloud SQL instance during the demotion operation but also exposes you to the risk of future replication failures. Change the value only if you know the reason for the GTID divergence and are confident that doing so will not cause any replication issues.
     */
    verifyGtidConsistency?: boolean;
}
