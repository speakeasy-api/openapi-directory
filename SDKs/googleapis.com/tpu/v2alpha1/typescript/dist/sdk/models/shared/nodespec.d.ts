import { SpeakeasyBase } from "../../../internal/utils";
import { Node, NodeInput } from "./node";
/**
 * Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
 */
export declare class NodeSpec extends SpeakeasyBase {
    /**
     * A TPU instance.
     */
    node?: Node;
    /**
     * The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. This is only specified when requesting a single node. In case of multi-node requests, multi_node_params must be populated instead. It's an error to specify both node_id and multi_node_params.
     */
    nodeId?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
}
/**
 * Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
 */
export declare class NodeSpecInput extends SpeakeasyBase {
    /**
     * A TPU instance.
     */
    node?: NodeInput;
    /**
     * The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. This is only specified when requesting a single node. In case of multi-node requests, multi_node_params must be populated instead. It's an error to specify both node_id and multi_node_params.
     */
    nodeId?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
}
