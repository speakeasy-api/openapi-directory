package openapisdk.models.operations;



public class EndpointGetUsersProfileResponse {
    public String contentType;
    public EndpointGetUsersProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetUsersProfileResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.PublicUserObject publicUserObject;
    public EndpointGetUsersProfileResponse withPublicUserObject(openapisdk.models.shared.PublicUserObject publicUserObject) {
        this.publicUserObject = publicUserObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetUsersProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}