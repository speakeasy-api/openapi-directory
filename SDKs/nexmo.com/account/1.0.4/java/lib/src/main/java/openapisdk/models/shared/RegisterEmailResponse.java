package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterEmailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_ids")
    public String[] applicationIds;
    public RegisterEmailResponse withApplicationIds(String[] applicationIds) {
        this.applicationIds = applicationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RegisterEmailResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public RegisterEmailResponseProviderEnum provider;
    public RegisterEmailResponse withProvider(RegisterEmailResponseProviderEnum provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public RegisterEmailResponse withValue(String value) {
        this.value = value;
        return this;
    }
}