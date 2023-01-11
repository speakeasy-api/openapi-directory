package openapisdk.models.operations;



public class EndpointRemoveShowsUserResponse {
    public String contentType;
    public EndpointRemoveShowsUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointRemoveShowsUserResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointRemoveShowsUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}