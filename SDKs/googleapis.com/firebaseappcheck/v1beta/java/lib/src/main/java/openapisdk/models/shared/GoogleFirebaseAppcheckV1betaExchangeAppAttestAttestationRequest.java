package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest
 * Request message for the ExchangeAppAttestAttestation method.
**/
public class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestationStatement")
    public String attestationStatement;
    public GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest withAttestationStatement(String attestationStatement) {
        this.attestationStatement = attestationStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public String challenge;
    public GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest withChallenge(String challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyId")
    public String keyId;
    public GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}