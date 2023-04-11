import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ReplicationSync contain information about the last replica sync to the cloud.
 */
export declare class ReplicationSync extends SpeakeasyBase {
    /**
     * The most updated snapshot created time in the source that finished replication.
     */
    lastSyncTime?: string;
}
