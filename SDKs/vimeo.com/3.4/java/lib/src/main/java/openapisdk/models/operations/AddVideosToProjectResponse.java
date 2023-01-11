package openapisdk.models.operations;



public class AddVideosToProjectResponse {
    public String contentType;
    public AddVideosToProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideosToProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public AddVideosToProjectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}