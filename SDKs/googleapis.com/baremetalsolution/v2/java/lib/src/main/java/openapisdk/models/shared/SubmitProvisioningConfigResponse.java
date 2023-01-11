package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitProvisioningConfigResponse
 * Response for SubmitProvisioningConfig.
**/
public class SubmitProvisioningConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningConfig")
    public ProvisioningConfig provisioningConfig;
    public SubmitProvisioningConfigResponse withProvisioningConfig(ProvisioningConfig provisioningConfig) {
        this.provisioningConfig = provisioningConfig;
        return this;
    }
}