import { SpeakeasyBase } from "../../../internal/utils";
import { ImageClassificationModelDeploymentMetadata } from "./imageclassificationmodeldeploymentmetadata";
import { ImageObjectDetectionModelDeploymentMetadata } from "./imageobjectdetectionmodeldeploymentmetadata";
/**
 * Request message for AutoMl.DeployModel.
 */
export declare class DeployModelRequest extends SpeakeasyBase {
    /**
     * Model deployment metadata specific to Image Classification.
     */
    imageClassificationModelDeploymentMetadata?: ImageClassificationModelDeploymentMetadata;
    /**
     * Model deployment metadata specific to Image Object Detection.
     */
    imageObjectDetectionModelDeploymentMetadata?: ImageObjectDetectionModelDeploymentMetadata;
}
