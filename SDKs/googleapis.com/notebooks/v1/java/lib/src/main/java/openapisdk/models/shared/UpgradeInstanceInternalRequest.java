package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpgradeInstanceInternalRequest
 * Request for upgrading a notebook instance from within the VM
**/
public class UpgradeInstanceInternalRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpgradeInstanceInternalRequestTypeEnum type;
    public UpgradeInstanceInternalRequest withType(UpgradeInstanceInternalRequestTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public UpgradeInstanceInternalRequest withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
}