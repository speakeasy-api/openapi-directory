import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1AppCheckToken } from "./googlefirebaseappcheckv1appchecktoken";
/**
 * Response message for the ExchangeAppAttestAttestation method.
 */
export declare class GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse extends SpeakeasyBase {
    /**
     * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
     */
    appCheckToken?: GoogleFirebaseAppcheckV1AppCheckToken;
    /**
     * An artifact that can be used in future calls to ExchangeAppAttestAssertion.
     */
    artifact?: string;
}
