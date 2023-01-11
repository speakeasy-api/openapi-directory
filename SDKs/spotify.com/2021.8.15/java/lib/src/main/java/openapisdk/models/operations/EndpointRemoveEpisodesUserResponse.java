package openapisdk.models.operations;



public class EndpointRemoveEpisodesUserResponse {
    public String contentType;
    public EndpointRemoveEpisodesUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointRemoveEpisodesUserResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointRemoveEpisodesUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}