package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1SuspendEntitlementRequest
 * Request message for CloudChannelService.SuspendEntitlement.
**/
public class GoogleCloudChannelV1SuspendEntitlementRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudChannelV1SuspendEntitlementRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}