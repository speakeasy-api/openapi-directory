package openapisdk.models.operations;



public class GetWorkspaceIdMembersFindRequest {
    public GetWorkspaceIdMembersFindPathParams pathParams;
    public GetWorkspaceIdMembersFindRequest withPathParams(GetWorkspaceIdMembersFindPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspaceIdMembersFindQueryParams queryParams;
    public GetWorkspaceIdMembersFindRequest withQueryParams(GetWorkspaceIdMembersFindQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkspaceIdMembersFindSecurity security;
    public GetWorkspaceIdMembersFindRequest withSecurity(GetWorkspaceIdMembersFindSecurity security) {
        this.security = security;
        return this;
    }
}