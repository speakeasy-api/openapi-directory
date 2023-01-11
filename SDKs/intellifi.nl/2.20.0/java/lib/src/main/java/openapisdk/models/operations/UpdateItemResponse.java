package openapisdk.models.operations;



public class UpdateItemResponse {
    public String contentType;
    public UpdateItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public UpdateItemResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public UpdateItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}