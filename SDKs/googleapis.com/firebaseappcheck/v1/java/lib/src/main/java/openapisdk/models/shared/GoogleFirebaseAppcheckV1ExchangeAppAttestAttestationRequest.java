package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest
 * Request message for the ExchangeAppAttestAttestation method.
**/
public class GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestationStatement")
    public String attestationStatement;
    public GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest withAttestationStatement(String attestationStatement) {
        this.attestationStatement = attestationStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public String challenge;
    public GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest withChallenge(String challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyId")
    public String keyId;
    public GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}