import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Model deployment metadata specific to Image Classification.
 */
export declare class ImageClassificationModelDeploymentMetadata extends SpeakeasyBase {
    /**
     * Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's node_qps. Must be between 1 and 100, inclusive on both ends.
     */
    nodeCount?: string;
}
