package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancePolicyOrTemplate
 * Either an InstancePolicy or an instance template.
**/
public class InstancePolicyOrTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installGpuDrivers")
    public Boolean installGpuDrivers;
    public InstancePolicyOrTemplate withInstallGpuDrivers(Boolean installGpuDrivers) {
        this.installGpuDrivers = installGpuDrivers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTemplate")
    public String instanceTemplate;
    public InstancePolicyOrTemplate withInstanceTemplate(String instanceTemplate) {
        this.instanceTemplate = instanceTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public InstancePolicy policy;
    public InstancePolicyOrTemplate withPolicy(InstancePolicy policy) {
        this.policy = policy;
        return this;
    }
}