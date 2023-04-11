import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HparamSearchSpaces } from "./hparamsearchspaces";
import { HparamTuningTrial } from "./hparamtuningtrial";
import { ModelReference } from "./modelreference";
import { StandardSqlField } from "./standardsqlfield";
import { TrainingRun, TrainingRunInput } from "./trainingrun";
export declare class ModelInput extends SpeakeasyBase {
    /**
     * The best trial_id across all training runs.
     */
    bestTrialId?: string;
    /**
     * Optional. A user-friendly description of this model.
     */
    description?: string;
    encryptionConfiguration?: EncryptionConfiguration;
    /**
     * Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models.
     */
    expirationTime?: string;
    /**
     * Optional. A descriptive name for this model.
     */
    friendlyName?: string;
    /**
     * Hyperparameter search spaces. These should be a subset of training_options.
     */
    hparamSearchSpaces?: HparamSearchSpaces;
    /**
     * The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: Record<string, string>;
    modelReference?: ModelReference;
    /**
     * Information for all training runs in increasing order of start_time.
     */
    trainingRuns?: TrainingRunInput[];
}
/**
 * Output only. Type of the model resource.
 */
export declare enum ModelModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    LinearRegression = "LINEAR_REGRESSION",
    LogisticRegression = "LOGISTIC_REGRESSION",
    Kmeans = "KMEANS",
    MatrixFactorization = "MATRIX_FACTORIZATION",
    DnnClassifier = "DNN_CLASSIFIER",
    Tensorflow = "TENSORFLOW",
    DnnRegressor = "DNN_REGRESSOR",
    BoostedTreeRegressor = "BOOSTED_TREE_REGRESSOR",
    BoostedTreeClassifier = "BOOSTED_TREE_CLASSIFIER",
    Arima = "ARIMA",
    AutomlRegressor = "AUTOML_REGRESSOR",
    AutomlClassifier = "AUTOML_CLASSIFIER",
    Pca = "PCA",
    DnnLinearCombinedClassifier = "DNN_LINEAR_COMBINED_CLASSIFIER",
    DnnLinearCombinedRegressor = "DNN_LINEAR_COMBINED_REGRESSOR",
    Autoencoder = "AUTOENCODER",
    ArimaPlus = "ARIMA_PLUS",
    RandomForestRegressor = "RANDOM_FOREST_REGRESSOR",
    RandomForestClassifier = "RANDOM_FOREST_CLASSIFIER"
}
/**
 * Successful response
 */
export declare class Model extends SpeakeasyBase {
    /**
     * The best trial_id across all training runs.
     */
    bestTrialId?: string;
    /**
     * Output only. The time when this model was created, in millisecs since the epoch.
     */
    creationTime?: string;
    /**
     * Output only. The default trial_id to use in TVFs when the trial_id is not passed in. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the best trial ID. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the smallest trial ID among all Pareto optimal trials.
     */
    defaultTrialId?: string;
    /**
     * Optional. A user-friendly description of this model.
     */
    description?: string;
    encryptionConfiguration?: EncryptionConfiguration;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string;
    /**
     * Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models.
     */
    expirationTime?: string;
    /**
     * Output only. Input feature columns that were used to train this model.
     */
    featureColumns?: StandardSqlField[];
    /**
     * Optional. A descriptive name for this model.
     */
    friendlyName?: string;
    /**
     * Hyperparameter search spaces. These should be a subset of training_options.
     */
    hparamSearchSpaces?: HparamSearchSpaces;
    /**
     * Output only. Trials of a [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) model sorted by trial_id.
     */
    hparamTrials?: HparamTuningTrial[];
    /**
     * Output only. Label columns that were used to train this model. The output of the model will have a "predicted_" prefix to these columns.
     */
    labelColumns?: StandardSqlField[];
    /**
     * The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The time when this model was last modified, in millisecs since the epoch.
     */
    lastModifiedTime?: string;
    /**
     * Output only. The geographic location where the model resides. This value is inherited from the dataset.
     */
    location?: string;
    modelReference?: ModelReference;
    /**
     * Output only. Type of the model resource.
     */
    modelType?: ModelModelTypeEnum;
    /**
     * Output only. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it only contains the best trial. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it contains all Pareto optimal trials sorted by trial_id.
     */
    optimalTrialIds?: string[];
    /**
     * Information for all training runs in increasing order of start_time.
     */
    trainingRuns?: TrainingRun[];
}
