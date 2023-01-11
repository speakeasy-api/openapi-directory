package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SandboxProcessorTokenCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SandboxProcessorTokenCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("institution_id")
    public String institutionId;
    public SandboxProcessorTokenCreateRequest withInstitutionId(String institutionId) {
        this.institutionId = institutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public SandboxProcessorTokenCreateRequestOptions options;
    public SandboxProcessorTokenCreateRequest withOptions(SandboxProcessorTokenCreateRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SandboxProcessorTokenCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}