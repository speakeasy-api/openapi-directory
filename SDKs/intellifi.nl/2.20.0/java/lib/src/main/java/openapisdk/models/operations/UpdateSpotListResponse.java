package openapisdk.models.operations;



public class UpdateSpotListResponse {
    public String contentType;
    public UpdateSpotListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public UpdateSpotListResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public UpdateSpotListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}