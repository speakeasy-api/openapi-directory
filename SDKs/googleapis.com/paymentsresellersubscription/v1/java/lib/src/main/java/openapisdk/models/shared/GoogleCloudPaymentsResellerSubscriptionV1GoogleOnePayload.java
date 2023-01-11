package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload
 * Payload specific to Google One products.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaigns")
    public String[] campaigns;
    public GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload withCampaigns(String[] campaigns) {
        this.campaigns = campaigns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offering")
    public GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum offering;
    public GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload withOffering(GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum offering) {
        this.offering = offering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesChannel")
    public GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum salesChannel;
    public GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload withSalesChannel(GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum salesChannel) {
        this.salesChannel = salesChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeId")
    public String storeId;
    public GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}