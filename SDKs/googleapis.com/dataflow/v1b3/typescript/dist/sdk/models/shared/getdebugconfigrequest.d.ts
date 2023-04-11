import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to get updated debug configuration for component.
 */
export declare class GetDebugConfigRequest extends SpeakeasyBase {
    /**
     * The internal component id for which debug configuration is requested.
     */
    componentId?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     */
    location?: string;
    /**
     * The worker id, i.e., VM hostname.
     */
    workerId?: string;
}
