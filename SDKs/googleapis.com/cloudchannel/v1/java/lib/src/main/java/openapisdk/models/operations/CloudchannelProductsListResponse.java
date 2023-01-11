package openapisdk.models.operations;



public class CloudchannelProductsListResponse {
    public String contentType;
    public CloudchannelProductsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListProductsResponse googleCloudChannelV1ListProductsResponse;
    public CloudchannelProductsListResponse withGoogleCloudChannelV1ListProductsResponse(openapisdk.models.shared.GoogleCloudChannelV1ListProductsResponse googleCloudChannelV1ListProductsResponse) {
        this.googleCloudChannelV1ListProductsResponse = googleCloudChannelV1ListProductsResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelProductsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}