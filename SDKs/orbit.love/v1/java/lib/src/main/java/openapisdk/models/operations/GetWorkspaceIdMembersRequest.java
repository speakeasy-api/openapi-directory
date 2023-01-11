package openapisdk.models.operations;



public class GetWorkspaceIdMembersRequest {
    public GetWorkspaceIdMembersPathParams pathParams;
    public GetWorkspaceIdMembersRequest withPathParams(GetWorkspaceIdMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspaceIdMembersQueryParams queryParams;
    public GetWorkspaceIdMembersRequest withQueryParams(GetWorkspaceIdMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkspaceIdMembersSecurity security;
    public GetWorkspaceIdMembersRequest withSecurity(GetWorkspaceIdMembersSecurity security) {
        this.security = security;
        return this;
    }
}