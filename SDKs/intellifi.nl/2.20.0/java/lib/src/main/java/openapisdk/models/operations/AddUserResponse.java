package openapisdk.models.operations;



public class AddUserResponse {
    public String contentType;
    public AddUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public AddUserResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public AddUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}