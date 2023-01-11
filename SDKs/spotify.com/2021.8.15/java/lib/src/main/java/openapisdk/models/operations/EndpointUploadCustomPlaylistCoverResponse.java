package openapisdk.models.operations;



public class EndpointUploadCustomPlaylistCoverResponse {
    public String contentType;
    public EndpointUploadCustomPlaylistCoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointUploadCustomPlaylistCoverResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointUploadCustomPlaylistCoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}