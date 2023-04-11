import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for a Datastore connector used by the job.
 */
export declare class DatastoreIODetails extends SpeakeasyBase {
    /**
     * Namespace used in the connection.
     */
    namespace?: string;
    /**
     * ProjectId accessed in the connection.
     */
    projectId?: string;
}
