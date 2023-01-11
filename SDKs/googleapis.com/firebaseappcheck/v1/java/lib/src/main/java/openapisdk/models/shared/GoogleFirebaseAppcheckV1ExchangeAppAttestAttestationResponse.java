package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse
 * Response message for the ExchangeAppAttestAttestation method.
**/
public class GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appCheckToken")
    public GoogleFirebaseAppcheckV1AppCheckToken appCheckToken;
    public GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse withAppCheckToken(GoogleFirebaseAppcheckV1AppCheckToken appCheckToken) {
        this.appCheckToken = appCheckToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifact")
    public String artifact;
    public GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse withArtifact(String artifact) {
        this.artifact = artifact;
        return this;
    }
}