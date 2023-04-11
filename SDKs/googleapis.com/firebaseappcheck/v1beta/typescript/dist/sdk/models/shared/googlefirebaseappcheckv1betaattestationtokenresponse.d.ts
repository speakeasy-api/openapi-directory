import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
 */
export declare class GoogleFirebaseAppcheckV1betaAttestationTokenResponse extends SpeakeasyBase {
    /**
     * An App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check.
     */
    attestationToken?: string;
    /**
     * The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.
     */
    ttl?: string;
}
