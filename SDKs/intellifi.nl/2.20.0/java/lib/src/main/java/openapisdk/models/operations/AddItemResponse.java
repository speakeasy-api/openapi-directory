package openapisdk.models.operations;



public class AddItemResponse {
    public String contentType;
    public AddItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public AddItemResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public AddItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}