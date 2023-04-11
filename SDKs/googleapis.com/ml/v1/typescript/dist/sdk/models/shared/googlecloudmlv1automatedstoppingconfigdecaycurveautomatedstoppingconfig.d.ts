import { SpeakeasyBase } from "../../../internal/utils";
export declare class GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig extends SpeakeasyBase {
    /**
     * If true, measurement.elapsed_time is used as the x-axis of each Trials Decay Curve. Otherwise, Measurement.steps will be used as the x-axis.
     */
    useElapsedTime?: boolean;
}
