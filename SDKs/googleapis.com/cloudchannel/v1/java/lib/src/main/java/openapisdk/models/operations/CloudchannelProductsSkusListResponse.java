package openapisdk.models.operations;



public class CloudchannelProductsSkusListResponse {
    public String contentType;
    public CloudchannelProductsSkusListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListSkusResponse googleCloudChannelV1ListSkusResponse;
    public CloudchannelProductsSkusListResponse withGoogleCloudChannelV1ListSkusResponse(openapisdk.models.shared.GoogleCloudChannelV1ListSkusResponse googleCloudChannelV1ListSkusResponse) {
        this.googleCloudChannelV1ListSkusResponse = googleCloudChannelV1ListSkusResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelProductsSkusListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}