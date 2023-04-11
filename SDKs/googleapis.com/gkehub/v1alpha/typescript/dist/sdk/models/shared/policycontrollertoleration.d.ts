import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Toleration of a node taint.
 */
export declare class PolicyControllerToleration extends SpeakeasyBase {
    /**
     * Matches a taint effect.
     */
    effect?: string;
    /**
     * Matches a taint key (not necessarily unique).
     */
    key?: string;
    /**
     * Matches a taint operator.
     */
    operator?: string;
    /**
     * Matches a taint value.
     */
    value?: string;
}
