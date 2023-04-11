import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfig";
import { GoogleCloudMlV1StudyConfigMetricSpec } from "./googlecloudmlv1studyconfigmetricspec";
import { GoogleCloudMlV1StudyConfigParameterSpec } from "./googlecloudmlv1studyconfigparameterspec";
/**
 * The search algorithm specified for the study.
 */
export declare enum GoogleCloudMlV1StudyConfigAlgorithmEnum {
    AlgorithmUnspecified = "ALGORITHM_UNSPECIFIED",
    GaussianProcessBandit = "GAUSSIAN_PROCESS_BANDIT",
    GridSearch = "GRID_SEARCH",
    RandomSearch = "RANDOM_SEARCH"
}
/**
 * Represents configuration of a study.
 */
export declare class GoogleCloudMlV1StudyConfig extends SpeakeasyBase {
    /**
     * The search algorithm specified for the study.
     */
    algorithm?: GoogleCloudMlV1StudyConfigAlgorithmEnum;
    /**
     * Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.
     */
    automatedStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfig;
    /**
     * Metric specs for the study.
     */
    metrics?: GoogleCloudMlV1StudyConfigMetricSpec[];
    /**
     * Required. The set of parameters to tune.
     */
    parameters?: GoogleCloudMlV1StudyConfigParameterSpec[];
}
