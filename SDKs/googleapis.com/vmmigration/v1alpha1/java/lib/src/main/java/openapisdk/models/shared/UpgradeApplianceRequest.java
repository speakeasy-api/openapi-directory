package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpgradeApplianceRequest
 * Request message for 'UpgradeAppliance' request.
**/
public class UpgradeApplianceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public UpgradeApplianceRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}