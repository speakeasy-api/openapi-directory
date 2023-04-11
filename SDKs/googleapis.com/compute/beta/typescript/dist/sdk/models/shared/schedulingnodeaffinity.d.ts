import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the operation of node selection. Valid operators are IN for affinity and NOT_IN for anti-affinity.
 */
export declare enum SchedulingNodeAffinityOperatorEnum {
    In = "IN",
    NotIn = "NOT_IN",
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
}
/**
 * Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled.
 */
export declare class SchedulingNodeAffinity extends SpeakeasyBase {
    /**
     * Corresponds to the label key of Node resource.
     */
    key?: string;
    /**
     * Defines the operation of node selection. Valid operators are IN for affinity and NOT_IN for anti-affinity.
     */
    operator?: SchedulingNodeAffinityOperatorEnum;
    /**
     * Corresponds to the label values of Node resource.
     */
    values?: string[];
}
