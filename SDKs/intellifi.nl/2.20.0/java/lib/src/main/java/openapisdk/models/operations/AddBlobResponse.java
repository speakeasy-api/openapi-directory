package openapisdk.models.operations;



public class AddBlobResponse {
    public String contentType;
    public AddBlobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public AddBlobResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public AddBlobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}