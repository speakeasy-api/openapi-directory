import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates NLU model training mode.
 */
export declare enum GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum {
    ModelTrainingModeUnspecified = "MODEL_TRAINING_MODE_UNSPECIFIED",
    ModelTrainingModeAutomatic = "MODEL_TRAINING_MODE_AUTOMATIC",
    ModelTrainingModeManual = "MODEL_TRAINING_MODE_MANUAL"
}
/**
 * Indicates the type of NLU model.
 */
export declare enum GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    ModelTypeStandard = "MODEL_TYPE_STANDARD",
    ModelTypeAdvanced = "MODEL_TYPE_ADVANCED"
}
/**
 * Settings related to NLU.
 */
export declare class GoogleCloudDialogflowCxV3beta1NluSettings extends SpeakeasyBase {
    /**
     * To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
     */
    classificationThreshold?: number;
    /**
     * Indicates NLU model training mode.
     */
    modelTrainingMode?: GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum;
    /**
     * Indicates the type of NLU model.
     */
    modelType?: GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum;
}
