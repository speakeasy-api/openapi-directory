package openapisdk.models.operations;



public class CloudchannelAccountsListTransferableSkusResponse {
    public String contentType;
    public CloudchannelAccountsListTransferableSkusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListTransferableSkusResponse googleCloudChannelV1ListTransferableSkusResponse;
    public CloudchannelAccountsListTransferableSkusResponse withGoogleCloudChannelV1ListTransferableSkusResponse(openapisdk.models.shared.GoogleCloudChannelV1ListTransferableSkusResponse googleCloudChannelV1ListTransferableSkusResponse) {
        this.googleCloudChannelV1ListTransferableSkusResponse = googleCloudChannelV1ListTransferableSkusResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsListTransferableSkusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}