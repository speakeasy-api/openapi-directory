import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the ExchangePlayIntegrityToken method.
 */
export declare class GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest extends SpeakeasyBase {
    /**
     * Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app.
     */
    playIntegrityToken?: string;
}
