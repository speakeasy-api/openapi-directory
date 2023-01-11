package openapisdk.models.operations;



public class GetGroupMembersRequest {
    public GetGroupMembersPathParams pathParams;
    public GetGroupMembersRequest withPathParams(GetGroupMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGroupMembersQueryParams queryParams;
    public GetGroupMembersRequest withQueryParams(GetGroupMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}