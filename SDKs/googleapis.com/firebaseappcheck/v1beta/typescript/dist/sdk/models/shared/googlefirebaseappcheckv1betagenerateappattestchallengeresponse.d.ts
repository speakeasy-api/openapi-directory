import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for the GenerateAppAttestChallenge method.
 */
export declare class GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse extends SpeakeasyBase {
    /**
     * A one-time use challenge for the client to pass to the App Attest API.
     */
    challenge?: string;
    /**
     * The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.
     */
    ttl?: string;
}
