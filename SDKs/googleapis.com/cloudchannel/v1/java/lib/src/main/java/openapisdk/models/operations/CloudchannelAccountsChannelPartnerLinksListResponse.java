package openapisdk.models.operations;



public class CloudchannelAccountsChannelPartnerLinksListResponse {
    public String contentType;
    public CloudchannelAccountsChannelPartnerLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListChannelPartnerLinksResponse googleCloudChannelV1ListChannelPartnerLinksResponse;
    public CloudchannelAccountsChannelPartnerLinksListResponse withGoogleCloudChannelV1ListChannelPartnerLinksResponse(openapisdk.models.shared.GoogleCloudChannelV1ListChannelPartnerLinksResponse googleCloudChannelV1ListChannelPartnerLinksResponse) {
        this.googleCloudChannelV1ListChannelPartnerLinksResponse = googleCloudChannelV1ListChannelPartnerLinksResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsChannelPartnerLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}