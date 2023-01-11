package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1TransferEntitlementsRequestInput
 * Request message for CloudChannelService.TransferEntitlements.
**/
public class GoogleCloudChannelV1TransferEntitlementsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authToken")
    public String authToken;
    public GoogleCloudChannelV1TransferEntitlementsRequestInput withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entitlements")
    public GoogleCloudChannelV1EntitlementInput[] entitlements;
    public GoogleCloudChannelV1TransferEntitlementsRequestInput withEntitlements(GoogleCloudChannelV1EntitlementInput[] entitlements) {
        this.entitlements = entitlements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudChannelV1TransferEntitlementsRequestInput withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}