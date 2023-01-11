package openapisdk.models.operations;



public class AddSpotListResponse {
    public String contentType;
    public AddSpotListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public AddSpotListResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public AddSpotListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}