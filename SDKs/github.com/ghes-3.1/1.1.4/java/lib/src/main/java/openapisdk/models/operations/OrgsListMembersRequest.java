package openapisdk.models.operations;



public class OrgsListMembersRequest {
    public OrgsListMembersPathParams pathParams;
    public OrgsListMembersRequest withPathParams(OrgsListMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrgsListMembersQueryParams queryParams;
    public OrgsListMembersRequest withQueryParams(OrgsListMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}