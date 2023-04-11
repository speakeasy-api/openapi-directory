import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a CostScenario. Specifies how costs are calculated.
 */
export declare class ScenarioConfig extends SpeakeasyBase {
    /**
     * Time frame for the estimate. Workloads must specify usage for this duration. Duration must be at least 1 hour (3,600 seconds) and at most 10 years (315,360,000 seconds). The calculations for years and months are based on a 730-hour (2,628,000-second) month. For durations longer than one month (2,628,000 seconds), the duration is rounded up to the next month, so the estimate shows you the costs for full months. For example, a duration of 3,232,800 seconds (roughly 5 weeks) is rounded up to 2 months.
     */
    estimateDuration?: string;
}
