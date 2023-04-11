import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfigdecaycurveautomatedstoppingconfig";
import { GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfigmedianautomatedstoppingconfig";
/**
 * Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.
 */
export declare class GoogleCloudMlV1AutomatedStoppingConfig extends SpeakeasyBase {
    decayCurveStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig;
    /**
     * The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement.
     */
    medianAutomatedStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig;
}
