package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitProvisioningConfigRequest
 * Request for SubmitProvisioningConfig.
**/
public class SubmitProvisioningConfigRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public SubmitProvisioningConfigRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningConfig")
    public ProvisioningConfig provisioningConfig;
    public SubmitProvisioningConfigRequest withProvisioningConfig(ProvisioningConfig provisioningConfig) {
        this.provisioningConfig = provisioningConfig;
        return this;
    }
}