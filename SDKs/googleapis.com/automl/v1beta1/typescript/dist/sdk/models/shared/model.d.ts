import { SpeakeasyBase } from "../../../internal/utils";
import { ImageClassificationModelMetadata } from "./imageclassificationmodelmetadata";
import { ImageObjectDetectionModelMetadata } from "./imageobjectdetectionmodelmetadata";
import { TablesModelMetadata } from "./tablesmodelmetadata";
import { TextClassificationModelMetadata } from "./textclassificationmodelmetadata";
import { TextExtractionModelMetadata } from "./textextractionmodelmetadata";
import { TranslationModelMetadata } from "./translationmodelmetadata";
/**
 * Output only. Deployment state of the model. A model can only serve prediction requests after it gets deployed.
 */
export declare enum ModelDeploymentStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    Deployed = "DEPLOYED",
    Undeployed = "UNDEPLOYED"
}
/**
 * API proto representing a trained machine learning model.
 */
export declare class Model extends SpeakeasyBase {
    /**
     * Output only. Timestamp when the model training finished and can be used for prediction.
     */
    createTime?: string;
    /**
     * Required. The resource ID of the dataset used to create the model. The dataset must come from the same ancestor project and location.
     */
    datasetId?: string;
    /**
     * Output only. Deployment state of the model. A model can only serve prediction requests after it gets deployed.
     */
    deploymentState?: ModelDeploymentStateEnum;
    /**
     * Required. The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. It must start with a letter.
     */
    displayName?: string;
    /**
     * Model metadata for image classification.
     */
    imageClassificationModelMetadata?: ImageClassificationModelMetadata;
    /**
     * Model metadata specific to image object detection.
     */
    imageObjectDetectionModelMetadata?: ImageObjectDetectionModelMetadata;
    /**
     * Output only. Resource name of the model. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`
     */
    name?: string;
    /**
     * Model metadata specific to AutoML Tables.
     */
    tablesModelMetadata?: TablesModelMetadata;
    /**
     * Model metadata that is specific to text classification.
     */
    textClassificationModelMetadata?: TextClassificationModelMetadata;
    /**
     * Model metadata that is specific to text extraction.
     */
    textExtractionModelMetadata?: TextExtractionModelMetadata;
    /**
     * Model metadata that is specific to text sentiment.
     */
    textSentimentModelMetadata?: Record<string, any>;
    /**
     * Output only. The number of examples in the training set used for the model creation.
     */
    trainExampleCount?: number;
    /**
     * Model metadata that is specific to translation.
     */
    translationModelMetadata?: TranslationModelMetadata;
    /**
     * Output only. Timestamp when this model was last updated.
     */
    updateTime?: string;
    /**
     * Output only. The number of examples in the validation set used for the model creation.
     */
    validateExampleCount?: number;
    /**
     * Model metadata specific to video classification.
     */
    videoClassificationModelMetadata?: Record<string, any>;
    /**
     * Model metadata specific to video object tracking.
     */
    videoObjectTrackingModelMetadata?: Record<string, any>;
}
/**
 * API proto representing a trained machine learning model.
 */
export declare class ModelInput extends SpeakeasyBase {
    /**
     * Output only. Timestamp when the model training finished and can be used for prediction.
     */
    createTime?: string;
    /**
     * Required. The resource ID of the dataset used to create the model. The dataset must come from the same ancestor project and location.
     */
    datasetId?: string;
    /**
     * Output only. Deployment state of the model. A model can only serve prediction requests after it gets deployed.
     */
    deploymentState?: ModelDeploymentStateEnum;
    /**
     * Required. The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. It must start with a letter.
     */
    displayName?: string;
    /**
     * Model metadata for image classification.
     */
    imageClassificationModelMetadata?: ImageClassificationModelMetadata;
    /**
     * Model metadata specific to image object detection.
     */
    imageObjectDetectionModelMetadata?: ImageObjectDetectionModelMetadata;
    /**
     * Output only. Resource name of the model. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`
     */
    name?: string;
    /**
     * Model metadata specific to AutoML Tables.
     */
    tablesModelMetadata?: TablesModelMetadata;
    /**
     * Model metadata that is specific to text classification.
     */
    textClassificationModelMetadata?: TextClassificationModelMetadata;
    /**
     * Model metadata that is specific to text extraction.
     */
    textExtractionModelMetadata?: TextExtractionModelMetadata;
    /**
     * Model metadata that is specific to text sentiment.
     */
    textSentimentModelMetadata?: Record<string, any>;
    /**
     * Model metadata that is specific to translation.
     */
    translationModelMetadata?: TranslationModelMetadata;
    /**
     * Output only. Timestamp when this model was last updated.
     */
    updateTime?: string;
    /**
     * Model metadata specific to video classification.
     */
    videoClassificationModelMetadata?: Record<string, any>;
    /**
     * Model metadata specific to video object tracking.
     */
    videoObjectTrackingModelMetadata?: Record<string, any>;
}
