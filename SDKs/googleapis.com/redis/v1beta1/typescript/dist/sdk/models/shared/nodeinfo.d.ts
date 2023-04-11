import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Node specific properties.
 */
export declare class NodeInfo extends SpeakeasyBase {
    /**
     * Output only. Node identifying string. e.g. 'node-0', 'node-1'
     */
    id?: string;
    /**
     * Output only. Location of the node.
     */
    zone?: string;
}
