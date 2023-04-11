import { SpeakeasyBase } from "../../../internal/utils";
import { ArimaOrder } from "./arimaorder";
/**
 * Booster type for boosted tree models.
 */
export declare enum TrainingOptionsBoosterTypeEnum {
    BoosterTypeUnspecified = "BOOSTER_TYPE_UNSPECIFIED",
    Gbtree = "GBTREE",
    Dart = "DART"
}
/**
 * Enums for color space, used for processing images in Object Table. See more details at https://www.tensorflow.org/io/tutorials/colorspace.
 */
export declare enum TrainingOptionsColorSpaceEnum {
    ColorSpaceUnspecified = "COLOR_SPACE_UNSPECIFIED",
    Rgb = "RGB",
    Hsv = "HSV",
    Yiq = "YIQ",
    Yuv = "YUV",
    Grayscale = "GRAYSCALE"
}
/**
 * Type of normalization algorithm for boosted tree models using dart booster.
 */
export declare enum TrainingOptionsDartNormalizeTypeEnum {
    DartNormalizeTypeUnspecified = "DART_NORMALIZE_TYPE_UNSPECIFIED",
    Tree = "TREE",
    Forest = "FOREST"
}
/**
 * The data frequency of a time series.
 */
export declare enum TrainingOptionsDataFrequencyEnum {
    DataFrequencyUnspecified = "DATA_FREQUENCY_UNSPECIFIED",
    AutoFrequency = "AUTO_FREQUENCY",
    Yearly = "YEARLY",
    Quarterly = "QUARTERLY",
    Monthly = "MONTHLY",
    Weekly = "WEEKLY",
    Daily = "DAILY",
    Hourly = "HOURLY",
    PerMinute = "PER_MINUTE"
}
/**
 * The data split type for training and evaluation, e.g. RANDOM.
 */
export declare enum TrainingOptionsDataSplitMethodEnum {
    DataSplitMethodUnspecified = "DATA_SPLIT_METHOD_UNSPECIFIED",
    Random = "RANDOM",
    Custom = "CUSTOM",
    Sequential = "SEQUENTIAL",
    NoSplit = "NO_SPLIT",
    AutoSplit = "AUTO_SPLIT"
}
/**
 * Distance type for clustering models.
 */
export declare enum TrainingOptionsDistanceTypeEnum {
    DistanceTypeUnspecified = "DISTANCE_TYPE_UNSPECIFIED",
    Euclidean = "EUCLIDEAN",
    Cosine = "COSINE"
}
/**
 * Feedback type that specifies which algorithm to run for matrix factorization.
 */
export declare enum TrainingOptionsFeedbackTypeEnum {
    FeedbackTypeUnspecified = "FEEDBACK_TYPE_UNSPECIFIED",
    Implicit = "IMPLICIT",
    Explicit = "EXPLICIT"
}
/**
 * The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled.
 */
export declare enum TrainingOptionsHolidayRegionEnum {
    HolidayRegionUnspecified = "HOLIDAY_REGION_UNSPECIFIED",
    Global = "GLOBAL",
    Na = "NA",
    Japac = "JAPAC",
    Emea = "EMEA",
    Lac = "LAC",
    Ae = "AE",
    Ar = "AR",
    At = "AT",
    Au = "AU",
    Be = "BE",
    Br = "BR",
    Ca = "CA",
    Ch = "CH",
    Cl = "CL",
    Cn = "CN",
    Co = "CO",
    Cs = "CS",
    Cz = "CZ",
    De = "DE",
    Dk = "DK",
    Dz = "DZ",
    Ec = "EC",
    Ee = "EE",
    Eg = "EG",
    Es = "ES",
    Fi = "FI",
    Fr = "FR",
    Gb = "GB",
    Gr = "GR",
    Hk = "HK",
    Hu = "HU",
    Id = "ID",
    Ie = "IE",
    Il = "IL",
    In = "IN",
    Ir = "IR",
    It = "IT",
    Jp = "JP",
    Kr = "KR",
    Lv = "LV",
    Ma = "MA",
    Mx = "MX",
    My = "MY",
    Ng = "NG",
    Nl = "NL",
    No = "NO",
    Nz = "NZ",
    Pe = "PE",
    Ph = "PH",
    Pk = "PK",
    Pl = "PL",
    Pt = "PT",
    Ro = "RO",
    Rs = "RS",
    Ru = "RU",
    Sa = "SA",
    Se = "SE",
    Sg = "SG",
    Si = "SI",
    Sk = "SK",
    Th = "TH",
    Tr = "TR",
    Tw = "TW",
    Ua = "UA",
    Us = "US",
    Ve = "VE",
    Vn = "VN",
    Za = "ZA"
}
export declare enum TrainingOptionsHparamTuningObjectivesEnum {
    HparamTuningObjectiveUnspecified = "HPARAM_TUNING_OBJECTIVE_UNSPECIFIED",
    MeanAbsoluteError = "MEAN_ABSOLUTE_ERROR",
    MeanSquaredError = "MEAN_SQUARED_ERROR",
    MeanSquaredLogError = "MEAN_SQUARED_LOG_ERROR",
    MedianAbsoluteError = "MEDIAN_ABSOLUTE_ERROR",
    RSquared = "R_SQUARED",
    ExplainedVariance = "EXPLAINED_VARIANCE",
    Precision = "PRECISION",
    Recall = "RECALL",
    Accuracy = "ACCURACY",
    F1Score = "F1_SCORE",
    LogLoss = "LOG_LOSS",
    RocAuc = "ROC_AUC",
    DaviesBouldinIndex = "DAVIES_BOULDIN_INDEX",
    MeanAveragePrecision = "MEAN_AVERAGE_PRECISION",
    NormalizedDiscountedCumulativeGain = "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN",
    AverageRank = "AVERAGE_RANK"
}
/**
 * The method used to initialize the centroids for kmeans algorithm.
 */
export declare enum TrainingOptionsKmeansInitializationMethodEnum {
    KmeansInitializationMethodUnspecified = "KMEANS_INITIALIZATION_METHOD_UNSPECIFIED",
    Random = "RANDOM",
    Custom = "CUSTOM",
    KmeansPlusPlus = "KMEANS_PLUS_PLUS"
}
/**
 * The strategy to determine learn rate for the current iteration.
 */
export declare enum TrainingOptionsLearnRateStrategyEnum {
    LearnRateStrategyUnspecified = "LEARN_RATE_STRATEGY_UNSPECIFIED",
    LineSearch = "LINE_SEARCH",
    Constant = "CONSTANT"
}
/**
 * Type of loss function used during training run.
 */
export declare enum TrainingOptionsLossTypeEnum {
    LossTypeUnspecified = "LOSS_TYPE_UNSPECIFIED",
    MeanSquaredLoss = "MEAN_SQUARED_LOSS",
    MeanLogLoss = "MEAN_LOG_LOSS"
}
/**
 * Optimization strategy for training linear regression models.
 */
export declare enum TrainingOptionsOptimizationStrategyEnum {
    OptimizationStrategyUnspecified = "OPTIMIZATION_STRATEGY_UNSPECIFIED",
    BatchGradientDescent = "BATCH_GRADIENT_DESCENT",
    NormalEquation = "NORMAL_EQUATION"
}
/**
 * Tree construction algorithm for boosted tree models.
 */
export declare enum TrainingOptionsTreeMethodEnum {
    TreeMethodUnspecified = "TREE_METHOD_UNSPECIFIED",
    Auto = "AUTO",
    Exact = "EXACT",
    Approx = "APPROX",
    Hist = "HIST"
}
/**
 * Options used in model training.
 */
export declare class TrainingOptions extends SpeakeasyBase {
    /**
     * If true, detect step changes and make data adjustment in the input time series.
     */
    adjustStepChanges?: boolean;
    /**
     * Whether to enable auto ARIMA or not.
     */
    autoArima?: boolean;
    /**
     * The max value of non-seasonal p and q.
     */
    autoArimaMaxOrder?: string;
    /**
     * Batch size for dnn models.
     */
    batchSize?: string;
    /**
     * Booster type for boosted tree models.
     */
    boosterType?: TrainingOptionsBoosterTypeEnum;
    /**
     * Whether or not p-value test should be computed for this model. Only available for linear and logistic regression models.
     */
    calculatePValues?: boolean;
    /**
     * If true, clean spikes and dips in the input time series.
     */
    cleanSpikesAndDips?: boolean;
    /**
     * Enums for color space, used for processing images in Object Table. See more details at https://www.tensorflow.org/io/tutorials/colorspace.
     */
    colorSpace?: TrainingOptionsColorSpaceEnum;
    /**
     * Subsample ratio of columns for each level for boosted tree models.
     */
    colsampleBylevel?: number;
    /**
     * Subsample ratio of columns for each node(split) for boosted tree models.
     */
    colsampleBynode?: number;
    /**
     * Subsample ratio of columns when constructing each tree for boosted tree models.
     */
    colsampleBytree?: number;
    /**
     * Type of normalization algorithm for boosted tree models using dart booster.
     */
    dartNormalizeType?: TrainingOptionsDartNormalizeTypeEnum;
    /**
     * The data frequency of a time series.
     */
    dataFrequency?: TrainingOptionsDataFrequencyEnum;
    /**
     * The column to split data with. This column won't be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties
     */
    dataSplitColumn?: string;
    /**
     * The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2.
     */
    dataSplitEvalFraction?: number;
    /**
     * The data split type for training and evaluation, e.g. RANDOM.
     */
    dataSplitMethod?: TrainingOptionsDataSplitMethodEnum;
    /**
     * If true, perform decompose time series and save the results.
     */
    decomposeTimeSeries?: boolean;
    /**
     * Distance type for clustering models.
     */
    distanceType?: TrainingOptionsDistanceTypeEnum;
    /**
     * Dropout probability for dnn models.
     */
    dropout?: number;
    /**
     * Whether to stop early when the loss doesn't improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms.
     */
    earlyStop?: boolean;
    /**
     * If true, enable global explanation during training.
     */
    enableGlobalExplain?: boolean;
    /**
     * Feedback type that specifies which algorithm to run for matrix factorization.
     */
    feedbackType?: TrainingOptionsFeedbackTypeEnum;
    /**
     * Hidden units for dnn models.
     */
    hiddenUnits?: string[];
    /**
     * The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled.
     */
    holidayRegion?: TrainingOptionsHolidayRegionEnum;
    /**
     * The number of periods ahead that need to be forecasted.
     */
    horizon?: string;
    /**
     * The target evaluation metrics to optimize the hyperparameters for.
     */
    hparamTuningObjectives?: TrainingOptionsHparamTuningObjectivesEnum[];
    /**
     * Include drift when fitting an ARIMA model.
     */
    includeDrift?: boolean;
    /**
     * Specifies the initial learning rate for the line search learn rate strategy.
     */
    initialLearnRate?: number;
    /**
     * Name of input label columns in training data.
     */
    inputLabelColumns?: string[];
    /**
     * Number of integral steps for the integrated gradients explain method.
     */
    integratedGradientsNumSteps?: string;
    /**
     * Item column specified for matrix factorization models.
     */
    itemColumn?: string;
    /**
     * The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM.
     */
    kmeansInitializationColumn?: string;
    /**
     * The method used to initialize the centroids for kmeans algorithm.
     */
    kmeansInitializationMethod?: TrainingOptionsKmeansInitializationMethodEnum;
    /**
     * L1 regularization coefficient.
     */
    l1Regularization?: number;
    /**
     * L2 regularization coefficient.
     */
    l2Regularization?: number;
    /**
     * Weights associated with each label class, for rebalancing the training data. Only applicable for classification models.
     */
    labelClassWeights?: Record<string, number>;
    /**
     * Learning rate in training. Used only for iterative training algorithms.
     */
    learnRate?: number;
    /**
     * The strategy to determine learn rate for the current iteration.
     */
    learnRateStrategy?: TrainingOptionsLearnRateStrategyEnum;
    /**
     * Type of loss function used during training run.
     */
    lossType?: TrainingOptionsLossTypeEnum;
    /**
     * The maximum number of iterations in training. Used only for iterative training algorithms.
     */
    maxIterations?: string;
    /**
     * Maximum number of trials to run in parallel.
     */
    maxParallelTrials?: string;
    /**
     * Get truncated length by last n points in time series. Use separately from time_series_length_fraction and min_time_series_length.
     */
    maxTimeSeriesLength?: string;
    /**
     * Maximum depth of a tree for boosted tree models.
     */
    maxTreeDepth?: string;
    /**
     * When early_stop is true, stops training when accuracy improvement is less than 'min_relative_progress'. Used only for iterative training algorithms.
     */
    minRelativeProgress?: number;
    /**
     * Minimum split loss for boosted tree models.
     */
    minSplitLoss?: number;
    /**
     * Set fast trend ARIMA_PLUS model minimum training length. Use in pair with time_series_length_fraction.
     */
    minTimeSeriesLength?: string;
    /**
     * Minimum sum of instance weight needed in a child for boosted tree models.
     */
    minTreeChildWeight?: string;
    /**
     * Google Cloud Storage URI from which the model was imported. Only applicable for imported models.
     */
    modelUri?: string;
    /**
     * Arima order, can be used for both non-seasonal and seasonal parts.
     */
    nonSeasonalOrder?: ArimaOrder;
    /**
     * Number of clusters for clustering models.
     */
    numClusters?: string;
    /**
     * Num factors specified for matrix factorization models.
     */
    numFactors?: string;
    /**
     * Number of parallel trees constructed during each iteration for boosted tree models.
     */
    numParallelTree?: string;
    /**
     * Number of trials to run this hyperparameter tuning job.
     */
    numTrials?: string;
    /**
     * Optimization strategy for training linear regression models.
     */
    optimizationStrategy?: TrainingOptionsOptimizationStrategyEnum;
    /**
     * Whether to preserve the input structs in output feature names. Suppose there is a struct A with field b. When false (default), the output feature name is A_b. When true, the output feature name is A.b.
     */
    preserveInputStructs?: boolean;
    /**
     * Number of paths for the sampled Shapley explain method.
     */
    sampledShapleyNumPaths?: string;
    /**
     * Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models.
     */
    subsample?: number;
    /**
     * Column to be designated as time series data for ARIMA model.
     */
    timeSeriesDataColumn?: string;
    /**
     * The time series id column that was used during ARIMA model training.
     */
    timeSeriesIdColumn?: string;
    /**
     * The time series id columns that were used during ARIMA model training.
     */
    timeSeriesIdColumns?: string[];
    /**
     * Get truncated length by fraction in time series.
     */
    timeSeriesLengthFraction?: number;
    /**
     * Column to be designated as time series timestamp for ARIMA model.
     */
    timeSeriesTimestampColumn?: string;
    /**
     * Tree construction algorithm for boosted tree models.
     */
    treeMethod?: TrainingOptionsTreeMethodEnum;
    /**
     * The smoothing window size for the trend component of the time series.
     */
    trendSmoothingWindowSize?: string;
    /**
     * User column specified for matrix factorization models.
     */
    userColumn?: string;
    /**
     * Hyperparameter for matrix factoration when implicit feedback type is specified.
     */
    walsAlpha?: number;
    /**
     * Whether to train a model from the last checkpoint.
     */
    warmStart?: boolean;
}
