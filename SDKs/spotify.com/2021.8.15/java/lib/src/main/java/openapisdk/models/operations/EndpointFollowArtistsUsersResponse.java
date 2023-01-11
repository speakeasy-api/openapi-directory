package openapisdk.models.operations;



public class EndpointFollowArtistsUsersResponse {
    public String contentType;
    public EndpointFollowArtistsUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointFollowArtistsUsersResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointFollowArtistsUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}