package openapisdk.models.operations;



public class DeleteItemResponse {
    public String contentType;
    public DeleteItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public DeleteItemResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public DeleteItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}