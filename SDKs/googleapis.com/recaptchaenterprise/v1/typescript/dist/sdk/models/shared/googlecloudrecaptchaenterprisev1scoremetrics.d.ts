import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1ScoreDistribution } from "./googlecloudrecaptchaenterprisev1scoredistribution";
/**
 * Metrics related to scoring.
 */
export declare class GoogleCloudRecaptchaenterpriseV1ScoreMetrics extends SpeakeasyBase {
    /**
     * Action-based metrics. The map key is the action name which specified by the site owners at time of the "execute" client-side call.
     */
    actionMetrics?: Record<string, GoogleCloudRecaptchaenterpriseV1ScoreDistribution>;
    /**
     * Score distribution.
     */
    overallMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreDistribution;
}
