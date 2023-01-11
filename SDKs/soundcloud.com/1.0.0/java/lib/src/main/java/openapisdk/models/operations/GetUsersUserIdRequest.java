package openapisdk.models.operations;



public class GetUsersUserIdRequest {
    public GetUsersUserIdPathParams pathParams;
    public GetUsersUserIdRequest withPathParams(GetUsersUserIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersUserIdSecurity security;
    public GetUsersUserIdRequest withSecurity(GetUsersUserIdSecurity security) {
        this.security = security;
        return this;
    }
}