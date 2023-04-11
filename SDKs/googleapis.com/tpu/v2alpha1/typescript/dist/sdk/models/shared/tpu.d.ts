import { SpeakeasyBase } from "../../../internal/utils";
import { NodeSpec, NodeSpecInput } from "./nodespec";
/**
 * Details of the TPU resource(s) being requested.
 */
export declare class Tpu extends SpeakeasyBase {
    /**
     * The TPU node(s) being requested.
     */
    nodeSpec?: NodeSpec[];
}
/**
 * Details of the TPU resource(s) being requested.
 */
export declare class TpuInput extends SpeakeasyBase {
    /**
     * The TPU node(s) being requested.
     */
    nodeSpec?: NodeSpecInput[];
}
