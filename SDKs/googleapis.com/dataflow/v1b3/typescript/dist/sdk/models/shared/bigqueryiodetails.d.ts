import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for a BigQuery connector used by the job.
 */
export declare class BigQueryIODetails extends SpeakeasyBase {
    /**
     * Dataset accessed in the connection.
     */
    dataset?: string;
    /**
     * Project accessed in the connection.
     */
    projectId?: string;
    /**
     * Query used to access data in the connection.
     */
    query?: string;
    /**
     * Table accessed in the connection.
     */
    table?: string;
}
