package openapisdk.models.operations;



public class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse {
    public String contentType;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse googleCloudChannelV1ListChannelPartnerRepricingConfigsResponse;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse withGoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse(openapisdk.models.shared.GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse googleCloudChannelV1ListChannelPartnerRepricingConfigsResponse) {
        this.googleCloudChannelV1ListChannelPartnerRepricingConfigsResponse = googleCloudChannelV1ListChannelPartnerRepricingConfigsResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}