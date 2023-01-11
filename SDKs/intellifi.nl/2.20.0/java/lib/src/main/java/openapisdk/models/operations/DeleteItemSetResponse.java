package openapisdk.models.operations;



public class DeleteItemSetResponse {
    public String contentType;
    public DeleteItemSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public DeleteItemSetResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public DeleteItemSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}