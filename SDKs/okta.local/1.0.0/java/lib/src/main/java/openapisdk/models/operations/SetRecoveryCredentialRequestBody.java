package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetRecoveryCredentialRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public SetRecoveryCredentialRequestBodyCredentials credentials;
    public SetRecoveryCredentialRequestBody withCredentials(SetRecoveryCredentialRequestBodyCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
}