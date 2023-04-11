import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the ExchangeAppAttestAssertion method.
 */
export declare class GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest extends SpeakeasyBase {
    /**
     * Required. The artifact returned by a previous call to ExchangeAppAttestAttestation.
     */
    artifact?: string;
    /**
     * Required. The CBOR-encoded assertion returned by the client-side App Attest API.
     */
    assertion?: string;
    /**
     * Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.
     */
    challenge?: string;
}
