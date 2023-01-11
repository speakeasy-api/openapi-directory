package openapisdk.models.operations;



public class GetUsersRequest {
    public GetUsersQueryParams queryParams;
    public GetUsersRequest withQueryParams(GetUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsersSecurity security;
    public GetUsersRequest withSecurity(GetUsersSecurity security) {
        this.security = security;
        return this;
    }
}