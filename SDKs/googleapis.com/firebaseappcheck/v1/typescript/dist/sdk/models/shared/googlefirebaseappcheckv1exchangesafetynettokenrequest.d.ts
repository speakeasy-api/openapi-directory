import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the ExchangeSafetyNetToken method.
 */
export declare class GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest extends SpeakeasyBase {
    /**
     * Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app.
     */
    safetyNetToken?: string;
}
