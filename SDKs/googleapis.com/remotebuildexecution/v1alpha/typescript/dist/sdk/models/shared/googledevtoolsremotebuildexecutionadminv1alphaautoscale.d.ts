import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Autoscale defines the autoscaling policy of a worker pool.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale extends SpeakeasyBase {
    /**
     * The maximal number of workers. Must be equal to or greater than min_size.
     */
    maxSize?: string;
    /**
     * The minimal number of workers. Must be greater than 0.
     */
    minSize?: string;
}
