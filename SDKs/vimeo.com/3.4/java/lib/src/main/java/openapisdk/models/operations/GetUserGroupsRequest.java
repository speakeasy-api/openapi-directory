package openapisdk.models.operations;



public class GetUserGroupsRequest {
    public GetUserGroupsPathParams pathParams;
    public GetUserGroupsRequest withPathParams(GetUserGroupsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserGroupsQueryParams queryParams;
    public GetUserGroupsRequest withQueryParams(GetUserGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}