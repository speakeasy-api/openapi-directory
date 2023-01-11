package openapisdk.models.operations;



public class EndpointGetCurrentUsersProfileRequest {
    public EndpointGetCurrentUsersProfileHeaders headers;
    public EndpointGetCurrentUsersProfileRequest withHeaders(EndpointGetCurrentUsersProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetCurrentUsersProfileSecurity security;
    public EndpointGetCurrentUsersProfileRequest withSecurity(EndpointGetCurrentUsersProfileSecurity security) {
        this.security = security;
        return this;
    }
}