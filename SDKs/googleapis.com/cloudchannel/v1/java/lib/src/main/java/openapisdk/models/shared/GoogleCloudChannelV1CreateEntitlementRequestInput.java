package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CreateEntitlementRequestInput
 * Request message for CloudChannelService.CreateEntitlement
**/
public class GoogleCloudChannelV1CreateEntitlementRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entitlement")
    public GoogleCloudChannelV1EntitlementInput entitlement;
    public GoogleCloudChannelV1CreateEntitlementRequestInput withEntitlement(GoogleCloudChannelV1EntitlementInput entitlement) {
        this.entitlement = entitlement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudChannelV1CreateEntitlementRequestInput withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}