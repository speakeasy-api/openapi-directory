package openapisdk.models.operations;



public class EndpointRemoveTracksUserResponse {
    public String contentType;
    public EndpointRemoveTracksUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointRemoveTracksUserResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointRemoveTracksUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}