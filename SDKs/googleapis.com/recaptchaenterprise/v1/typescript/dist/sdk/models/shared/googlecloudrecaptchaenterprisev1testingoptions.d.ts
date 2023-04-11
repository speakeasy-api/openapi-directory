import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if CHALLENGE.
 */
export declare enum GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum {
    TestingChallengeUnspecified = "TESTING_CHALLENGE_UNSPECIFIED",
    Nocaptcha = "NOCAPTCHA",
    UnsolvableChallenge = "UNSOLVABLE_CHALLENGE"
}
/**
 * Options for user acceptance testing.
 */
export declare class GoogleCloudRecaptchaenterpriseV1TestingOptions extends SpeakeasyBase {
    /**
     * For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if CHALLENGE.
     */
    testingChallenge?: GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum;
    /**
     * All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
     */
    testingScore?: number;
}
