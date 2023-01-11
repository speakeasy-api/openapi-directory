package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfidentialInstanceConfig
 * Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs)
**/
public class ConfidentialInstanceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableConfidentialCompute")
    public Boolean enableConfidentialCompute;
    public ConfidentialInstanceConfig withEnableConfidentialCompute(Boolean enableConfidentialCompute) {
        this.enableConfidentialCompute = enableConfidentialCompute;
        return this;
    }
}