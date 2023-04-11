import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaAppCheckToken } from "./googlefirebaseappcheckv1betaappchecktoken";
import { GoogleFirebaseAppcheckV1betaAttestationTokenResponse } from "./googlefirebaseappcheckv1betaattestationtokenresponse";
/**
 * Response message for the ExchangeAppAttestAttestation method.
 */
export declare class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse extends SpeakeasyBase {
    /**
     * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
     */
    appCheckToken?: GoogleFirebaseAppcheckV1betaAppCheckToken;
    /**
     * An artifact that can be used in future calls to ExchangeAppAttestAssertion.
     */
    artifact?: string;
    /**
     * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
     */
    attestationToken?: GoogleFirebaseAppcheckV1betaAttestationTokenResponse;
}
