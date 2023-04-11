import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaModelServingConfigList } from "./googlecloudretailv2betamodelservingconfiglist";
/**
 * Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.
 */
export declare enum GoogleCloudRetailV2betaModelDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED",
    DataOk = "DATA_OK",
    DataError = "DATA_ERROR"
}
/**
 * Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.
 */
export declare enum GoogleCloudRetailV2betaModelFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED",
    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}
/**
 * Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.
 */
export declare enum GoogleCloudRetailV2betaModelPeriodicTuningStateEnum {
    PeriodicTuningStateUnspecified = "PERIODIC_TUNING_STATE_UNSPECIFIED",
    PeriodicTuningDisabled = "PERIODIC_TUNING_DISABLED",
    AllTuningDisabled = "ALL_TUNING_DISABLED",
    PeriodicTuningEnabled = "PERIODIC_TUNING_ENABLED"
}
/**
 * Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.
 */
export declare enum GoogleCloudRetailV2betaModelServingStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED",
    Inactive = "INACTIVE",
    Active = "ACTIVE",
    Tuned = "TUNED"
}
/**
 * Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.
 */
export declare enum GoogleCloudRetailV2betaModelTrainingStateEnum {
    TrainingStateUnspecified = "TRAINING_STATE_UNSPECIFIED",
    Paused = "PAUSED",
    Training = "TRAINING"
}
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
 */
export declare class GoogleCloudRetailV2betaModel extends SpeakeasyBase {
    /**
     * Output only. Timestamp the Recommendation Model was created at.
     */
    createTime?: string;
    /**
     * Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.
     */
    dataState?: GoogleCloudRetailV2betaModelDataStateEnum;
    /**
     * Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.
     */
    displayName?: string;
    /**
     * Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.
     */
    filteringOption?: GoogleCloudRetailV2betaModelFilteringOptionEnum;
    /**
     * Output only. The timestamp when the latest successful tune finished.
     */
    lastTuneTime?: string;
    /**
     * Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.
     */
    name?: string;
    /**
     * Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.
     */
    optimizationObjective?: string;
    /**
     * Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.
     */
    periodicTuningState?: GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;
    /**
     * Output only. The list of valid serving configs associated with the PageOptimizationConfig.
     */
    servingConfigLists?: GoogleCloudRetailV2betaModelServingConfigList[];
    /**
     * Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.
     */
    servingState?: GoogleCloudRetailV2betaModelServingStateEnum;
    /**
     * Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.
     */
    trainingState?: GoogleCloudRetailV2betaModelTrainingStateEnum;
    /**
     * Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on.
     */
    tuningOperation?: string;
    /**
     * Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.
     */
    type?: string;
    /**
     * Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated.
     */
    updateTime?: string;
}
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
 */
export declare class GoogleCloudRetailV2betaModelInput extends SpeakeasyBase {
    /**
     * Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.
     */
    displayName?: string;
    /**
     * Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.
     */
    filteringOption?: GoogleCloudRetailV2betaModelFilteringOptionEnum;
    /**
     * Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.
     */
    name?: string;
    /**
     * Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.
     */
    optimizationObjective?: string;
    /**
     * Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.
     */
    periodicTuningState?: GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;
    /**
     * Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.
     */
    trainingState?: GoogleCloudRetailV2betaModelTrainingStateEnum;
    /**
     * Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.
     */
    type?: string;
}
