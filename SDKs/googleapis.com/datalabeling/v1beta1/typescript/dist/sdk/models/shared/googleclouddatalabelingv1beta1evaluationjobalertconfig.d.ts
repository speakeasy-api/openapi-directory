import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides details for how an evaluation job sends email alerts based on the results of a run.
 */
export declare class GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig extends SpeakeasyBase {
    /**
     * Required. An email address to send alerts to.
     */
    email?: string;
    /**
     * Required. A number between 0 and 1 that describes a minimum mean average precision threshold. When the evaluation job runs, if it calculates that your model version's predictions from the recent interval have meanAveragePrecision below this threshold, then it sends an alert to your specified email.
     */
    minAcceptableMeanAveragePrecision?: number;
}
