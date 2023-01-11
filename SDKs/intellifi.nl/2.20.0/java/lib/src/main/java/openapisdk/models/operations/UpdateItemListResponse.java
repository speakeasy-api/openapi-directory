package openapisdk.models.operations;



public class UpdateItemListResponse {
    public String contentType;
    public UpdateItemListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public UpdateItemListResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public UpdateItemListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}