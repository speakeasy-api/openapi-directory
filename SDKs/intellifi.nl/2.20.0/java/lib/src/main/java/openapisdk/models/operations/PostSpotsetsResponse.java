package openapisdk.models.operations;



public class PostSpotsetsResponse {
    public String contentType;
    public PostSpotsetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public PostSpotsetsResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public PostSpotsetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}