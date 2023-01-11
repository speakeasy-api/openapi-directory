package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterEmailRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_ids")
    public java.util.Map<String, Object> applicationIds;
    public RegisterEmailRequest withApplicationIds(java.util.Map<String, Object> applicationIds) {
        this.applicationIds = applicationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RegisterEmailRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("provider")
    public RegisterEmailRequestProviderEnum provider;
    public RegisterEmailRequest withProvider(RegisterEmailRequestProviderEnum provider) {
        this.provider = provider;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public RegisterEmailRequest withValue(String value) {
        this.value = value;
        return this;
    }
}