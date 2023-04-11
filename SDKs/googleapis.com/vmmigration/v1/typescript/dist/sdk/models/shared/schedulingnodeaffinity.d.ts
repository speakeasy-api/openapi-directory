import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The operator to use for the node resources specified in the `values` parameter.
 */
export declare enum SchedulingNodeAffinityOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    In = "IN",
    NotIn = "NOT_IN"
}
/**
 * Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling
 */
export declare class SchedulingNodeAffinity extends SpeakeasyBase {
    /**
     * The label key of Node resource to reference.
     */
    key?: string;
    /**
     * The operator to use for the node resources specified in the `values` parameter.
     */
    operator?: SchedulingNodeAffinityOperatorEnum;
    /**
     * Corresponds to the label values of Node resource.
     */
    values?: string[];
}
