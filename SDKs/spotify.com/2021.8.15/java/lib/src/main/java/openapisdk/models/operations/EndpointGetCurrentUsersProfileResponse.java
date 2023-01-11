package openapisdk.models.operations;



public class EndpointGetCurrentUsersProfileResponse {
    public String contentType;
    public EndpointGetCurrentUsersProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetCurrentUsersProfileResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.PrivateUserObject privateUserObject;
    public EndpointGetCurrentUsersProfileResponse withPrivateUserObject(openapisdk.models.shared.PrivateUserObject privateUserObject) {
        this.privateUserObject = privateUserObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetCurrentUsersProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}