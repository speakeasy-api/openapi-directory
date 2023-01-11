package openapisdk.models.operations;



public class EndpointGetUsersProfileRequest {
    public EndpointGetUsersProfilePathParams pathParams;
    public EndpointGetUsersProfileRequest withPathParams(EndpointGetUsersProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetUsersProfileHeaders headers;
    public EndpointGetUsersProfileRequest withHeaders(EndpointGetUsersProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetUsersProfileSecurity security;
    public EndpointGetUsersProfileRequest withSecurity(EndpointGetUsersProfileSecurity security) {
        this.security = security;
        return this;
    }
}