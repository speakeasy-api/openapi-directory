package openapisdk.models.operations;



public class GetUsersUserIdWebProfilesRequest {
    public GetUsersUserIdWebProfilesPathParams pathParams;
    public GetUsersUserIdWebProfilesRequest withPathParams(GetUsersUserIdWebProfilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersUserIdWebProfilesQueryParams queryParams;
    public GetUsersUserIdWebProfilesRequest withQueryParams(GetUsersUserIdWebProfilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsersUserIdWebProfilesSecurity security;
    public GetUsersUserIdWebProfilesRequest withSecurity(GetUsersUserIdWebProfilesSecurity security) {
        this.security = security;
        return this;
    }
}