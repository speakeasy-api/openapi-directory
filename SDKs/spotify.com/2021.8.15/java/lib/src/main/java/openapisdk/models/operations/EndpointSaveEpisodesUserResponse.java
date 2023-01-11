package openapisdk.models.operations;



public class EndpointSaveEpisodesUserResponse {
    public String contentType;
    public EndpointSaveEpisodesUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSaveEpisodesUserResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSaveEpisodesUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}