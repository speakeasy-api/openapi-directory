import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for the GeneratePlayIntegrityChallenge method.
 */
export declare class GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse extends SpeakeasyBase {
    /**
     * A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API.
     */
    challenge?: string;
    /**
     * The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.
     */
    ttl?: string;
}
