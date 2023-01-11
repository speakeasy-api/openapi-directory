package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateOrganizationRequestBodyApi
 * API-specific settings
**/
public class UpdateOrganizationRequestBodyApi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateOrganizationRequestBodyApi withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}