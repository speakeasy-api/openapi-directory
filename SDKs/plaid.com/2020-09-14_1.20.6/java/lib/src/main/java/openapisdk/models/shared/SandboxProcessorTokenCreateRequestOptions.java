package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxProcessorTokenCreateRequestOptions
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
**/
public class SandboxProcessorTokenCreateRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("override_password")
    public String overridePassword;
    public SandboxProcessorTokenCreateRequestOptions withOverridePassword(String overridePassword) {
        this.overridePassword = overridePassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("override_username")
    public String overrideUsername;
    public SandboxProcessorTokenCreateRequestOptions withOverrideUsername(String overrideUsername) {
        this.overrideUsername = overrideUsername;
        return this;
    }
}