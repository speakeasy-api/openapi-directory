package openapisdk.models.operations;



public class EndpointRemoveAlbumsUserResponse {
    public String contentType;
    public EndpointRemoveAlbumsUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointRemoveAlbumsUserResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointRemoveAlbumsUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}