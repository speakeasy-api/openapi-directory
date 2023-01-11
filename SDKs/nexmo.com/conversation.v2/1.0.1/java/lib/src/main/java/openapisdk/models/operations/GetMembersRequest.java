package openapisdk.models.operations;



public class GetMembersRequest {
    public GetMembersPathParams pathParams;
    public GetMembersRequest withPathParams(GetMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMembersQueryParams queryParams;
    public GetMembersRequest withQueryParams(GetMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}