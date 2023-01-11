package openapisdk.models.operations;



public class DeleteSpotListResponse {
    public String contentType;
    public DeleteSpotListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public DeleteSpotListResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public DeleteSpotListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}