package openapisdk.models.operations;



public class CloudchannelAccountsCustomersEntitlementsListResponse {
    public String contentType;
    public CloudchannelAccountsCustomersEntitlementsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListEntitlementsResponse googleCloudChannelV1ListEntitlementsResponse;
    public CloudchannelAccountsCustomersEntitlementsListResponse withGoogleCloudChannelV1ListEntitlementsResponse(openapisdk.models.shared.GoogleCloudChannelV1ListEntitlementsResponse googleCloudChannelV1ListEntitlementsResponse) {
        this.googleCloudChannelV1ListEntitlementsResponse = googleCloudChannelV1ListEntitlementsResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersEntitlementsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}