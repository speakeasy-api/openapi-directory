import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for a Spanner connector used by the job.
 */
export declare class SpannerIODetails extends SpeakeasyBase {
    /**
     * DatabaseId accessed in the connection.
     */
    databaseId?: string;
    /**
     * InstanceId accessed in the connection.
     */
    instanceId?: string;
    /**
     * ProjectId accessed in the connection.
     */
    projectId?: string;
}
