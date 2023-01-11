package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ActivateEntitlementRequest
 * Request message for CloudChannelService.ActivateEntitlement.
**/
public class GoogleCloudChannelV1ActivateEntitlementRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudChannelV1ActivateEntitlementRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}