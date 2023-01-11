package openapisdk.models.operations;



public class CloudchannelAccountsListTransferableOffersResponse {
    public String contentType;
    public CloudchannelAccountsListTransferableOffersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListTransferableOffersResponse googleCloudChannelV1ListTransferableOffersResponse;
    public CloudchannelAccountsListTransferableOffersResponse withGoogleCloudChannelV1ListTransferableOffersResponse(openapisdk.models.shared.GoogleCloudChannelV1ListTransferableOffersResponse googleCloudChannelV1ListTransferableOffersResponse) {
        this.googleCloudChannelV1ListTransferableOffersResponse = googleCloudChannelV1ListTransferableOffersResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsListTransferableOffersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}