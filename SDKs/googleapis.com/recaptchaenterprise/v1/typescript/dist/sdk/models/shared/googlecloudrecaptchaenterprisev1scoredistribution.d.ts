import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Score distribution.
 */
export declare class GoogleCloudRecaptchaenterpriseV1ScoreDistribution extends SpeakeasyBase {
    /**
     * Map key is score value multiplied by 100. The scores are discrete values between [0, 1]. The maximum number of buckets is on order of a few dozen, but typically much lower (ie. 10).
     */
    scoreBuckets?: Record<string, string>;
}
