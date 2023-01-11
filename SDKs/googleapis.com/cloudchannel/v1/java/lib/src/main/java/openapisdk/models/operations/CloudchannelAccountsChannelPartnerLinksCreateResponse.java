package openapisdk.models.operations;



public class CloudchannelAccountsChannelPartnerLinksCreateResponse {
    public String contentType;
    public CloudchannelAccountsChannelPartnerLinksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ChannelPartnerLink googleCloudChannelV1ChannelPartnerLink;
    public CloudchannelAccountsChannelPartnerLinksCreateResponse withGoogleCloudChannelV1ChannelPartnerLink(openapisdk.models.shared.GoogleCloudChannelV1ChannelPartnerLink googleCloudChannelV1ChannelPartnerLink) {
        this.googleCloudChannelV1ChannelPartnerLink = googleCloudChannelV1ChannelPartnerLink;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsChannelPartnerLinksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}