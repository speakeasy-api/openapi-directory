package openapisdk.models.operations;



public class EndpointSaveShowsUserResponse {
    public String contentType;
    public EndpointSaveShowsUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSaveShowsUserResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSaveShowsUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}