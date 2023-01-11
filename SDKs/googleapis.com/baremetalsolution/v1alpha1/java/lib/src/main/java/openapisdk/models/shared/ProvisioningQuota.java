package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningQuota
 * A provisioning quota for a given project.
**/
public class ProvisioningQuota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceQuota")
    public InstanceQuota instanceQuota;
    public ProvisioningQuota withInstanceQuota(InstanceQuota instanceQuota) {
        this.instanceQuota = instanceQuota;
        return this;
    }
}