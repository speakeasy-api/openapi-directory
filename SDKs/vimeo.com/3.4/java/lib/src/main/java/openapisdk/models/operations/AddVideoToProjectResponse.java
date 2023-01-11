package openapisdk.models.operations;



public class AddVideoToProjectResponse {
    public String contentType;
    public AddVideoToProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideoToProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public AddVideoToProjectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}