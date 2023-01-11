package openapisdk.models.operations;



public class DeleteBlobResponse {
    public String contentType;
    public DeleteBlobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public DeleteBlobResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public DeleteBlobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}