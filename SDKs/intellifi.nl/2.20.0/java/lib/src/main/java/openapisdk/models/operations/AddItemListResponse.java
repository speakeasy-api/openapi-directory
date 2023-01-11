package openapisdk.models.operations;



public class AddItemListResponse {
    public String contentType;
    public AddItemListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public AddItemListResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public AddItemListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}