package openapisdk.models.operations;



public class EndpointSaveAlbumsUserResponse {
    public String contentType;
    public EndpointSaveAlbumsUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSaveAlbumsUserResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSaveAlbumsUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}