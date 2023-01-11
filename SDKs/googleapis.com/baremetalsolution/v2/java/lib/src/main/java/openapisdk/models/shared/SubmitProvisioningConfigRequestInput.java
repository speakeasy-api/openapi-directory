package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitProvisioningConfigRequestInput
 * Request for SubmitProvisioningConfig.
**/
public class SubmitProvisioningConfigRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public SubmitProvisioningConfigRequestInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningConfig")
    public ProvisioningConfigInput provisioningConfig;
    public SubmitProvisioningConfigRequestInput withProvisioningConfig(ProvisioningConfigInput provisioningConfig) {
        this.provisioningConfig = provisioningConfig;
        return this;
    }
}