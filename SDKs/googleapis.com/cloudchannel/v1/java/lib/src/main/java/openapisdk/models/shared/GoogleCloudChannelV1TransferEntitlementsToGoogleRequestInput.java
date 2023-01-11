package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput
 * Request message for CloudChannelService.TransferEntitlementsToGoogle.
**/
public class GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entitlements")
    public GoogleCloudChannelV1EntitlementInput[] entitlements;
    public GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput withEntitlements(GoogleCloudChannelV1EntitlementInput[] entitlements) {
        this.entitlements = entitlements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}