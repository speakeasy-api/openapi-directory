import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1ChallengeMetrics } from "./googlecloudrecaptchaenterprisev1challengemetrics";
import { GoogleCloudRecaptchaenterpriseV1ScoreMetrics } from "./googlecloudrecaptchaenterprisev1scoremetrics";
/**
 * Metrics for a single Key.
 */
export declare class GoogleCloudRecaptchaenterpriseV1Metrics extends SpeakeasyBase {
    /**
     * Metrics will be continuous and in order by dates, and in the granularity of day. Only challenge-based keys (CHECKBOX, INVISIBLE), will have challenge-based data.
     */
    challengeMetrics?: GoogleCloudRecaptchaenterpriseV1ChallengeMetrics[];
    /**
     * Output only. The name of the metrics, in the format "projects/{project}/keys/{key}/metrics".
     */
    name?: string;
    /**
     * Metrics will be continuous and in order by dates, and in the granularity of day. All Key types should have score-based data.
     */
    scoreMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreMetrics[];
    /**
     * Inclusive start time aligned to a day (UTC).
     */
    startTime?: string;
}
