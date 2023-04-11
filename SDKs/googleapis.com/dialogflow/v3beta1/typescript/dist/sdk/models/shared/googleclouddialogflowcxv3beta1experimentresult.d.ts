import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics } from "./googleclouddialogflowcxv3beta1experimentresultversionmetrics";
/**
 * The inference result which includes an objective metric to optimize and the confidence interval.
 */
export declare class GoogleCloudDialogflowCxV3beta1ExperimentResult extends SpeakeasyBase {
    /**
     * The last time the experiment's stats data was updated. Will have default value if stats have never been computed for this experiment.
     */
    lastUpdateTime?: string;
    /**
     * Version variants and metrics.
     */
    versionMetrics?: GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics[];
}
