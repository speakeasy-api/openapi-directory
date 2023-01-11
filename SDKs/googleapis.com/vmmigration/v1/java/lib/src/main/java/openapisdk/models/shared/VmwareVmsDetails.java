package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmwareVmsDetails
 * VmwareVmsDetails describes VMs in vCenter.
**/
public class VmwareVmsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public VmwareVmDetails[] details;
    public VmwareVmsDetails withDetails(VmwareVmDetails[] details) {
        this.details = details;
        return this;
    }
}