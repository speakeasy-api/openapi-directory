import { SpeakeasyBase } from "../../../internal/utils";
import { Edge } from "./edge";
import { Node } from "./node";
export declare class Graph extends SpeakeasyBase {
    /**
     * All edges in graph
     */
    edges?: Edge[];
    /**
     * All nodes in graph
     */
    nodes?: Node[];
}
