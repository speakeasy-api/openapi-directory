package openapisdk.models.operations;



public class EndpointSaveTracksUserResponse {
    public String contentType;
    public EndpointSaveTracksUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSaveTracksUserResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSaveTracksUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}