package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListEntitlementsResponse
 * Response message for CloudChannelService.ListEntitlements.
**/
public class GoogleCloudChannelV1ListEntitlementsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entitlements")
    public GoogleCloudChannelV1Entitlement[] entitlements;
    public GoogleCloudChannelV1ListEntitlementsResponse withEntitlements(GoogleCloudChannelV1Entitlement[] entitlements) {
        this.entitlements = entitlements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListEntitlementsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}