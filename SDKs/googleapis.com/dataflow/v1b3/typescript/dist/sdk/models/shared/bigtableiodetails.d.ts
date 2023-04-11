import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for a Cloud Bigtable connector used by the job.
 */
export declare class BigTableIODetails extends SpeakeasyBase {
    /**
     * InstanceId accessed in the connection.
     */
    instanceId?: string;
    /**
     * ProjectId accessed in the connection.
     */
    projectId?: string;
    /**
     * TableId accessed in the connection.
     */
    tableId?: string;
}
