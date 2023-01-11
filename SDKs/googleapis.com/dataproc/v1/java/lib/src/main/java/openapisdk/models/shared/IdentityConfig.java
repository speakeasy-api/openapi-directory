package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityConfig
 * Identity related configuration, including service account based secure multi-tenancy user mappings.
**/
public class IdentityConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userServiceAccountMapping")
    public java.util.Map<String, String> userServiceAccountMapping;
    public IdentityConfig withUserServiceAccountMapping(java.util.Map<String, String> userServiceAccountMapping) {
        this.userServiceAccountMapping = userServiceAccountMapping;
        return this;
    }
}