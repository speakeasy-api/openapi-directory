package openapisdk.models.operations;



public class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse {
    public String contentType;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ChannelPartnerRepricingConfig googleCloudChannelV1ChannelPartnerRepricingConfig;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse withGoogleCloudChannelV1ChannelPartnerRepricingConfig(openapisdk.models.shared.GoogleCloudChannelV1ChannelPartnerRepricingConfig googleCloudChannelV1ChannelPartnerRepricingConfig) {
        this.googleCloudChannelV1ChannelPartnerRepricingConfig = googleCloudChannelV1ChannelPartnerRepricingConfig;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}