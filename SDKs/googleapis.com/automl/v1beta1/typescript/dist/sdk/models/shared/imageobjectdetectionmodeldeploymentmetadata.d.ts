import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Model deployment metadata specific to Image Object Detection.
 */
export declare class ImageObjectDetectionModelDeploymentMetadata extends SpeakeasyBase {
    /**
     * Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's qps_per_node. Must be between 1 and 100, inclusive on both ends.
     */
    nodeCount?: string;
}
