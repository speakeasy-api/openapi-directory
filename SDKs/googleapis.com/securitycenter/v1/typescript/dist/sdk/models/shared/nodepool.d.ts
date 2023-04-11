import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
/**
 * Provides GKE Node Pool information.
 */
export declare class NodePool extends SpeakeasyBase {
    /**
     * Kubernetes Node pool name.
     */
    name?: string;
    /**
     * Nodes associated with the finding.
     */
    nodes?: Node[];
}
