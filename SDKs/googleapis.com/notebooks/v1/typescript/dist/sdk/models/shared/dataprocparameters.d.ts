import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters used in Dataproc JobType executions.
 */
export declare class DataprocParameters extends SpeakeasyBase {
    /**
     * URI for cluster used to run Dataproc execution. Format: `projects/{PROJECT_ID}/regions/{REGION}/clusters/{CLUSTER_NAME}`
     */
    cluster?: string;
}
