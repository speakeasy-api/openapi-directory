package openapisdk.models.operations;



public class ReplicapoolPoolsListRequest {
    public ReplicapoolPoolsListPathParams pathParams;
    public ReplicapoolPoolsListRequest withPathParams(ReplicapoolPoolsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolPoolsListQueryParams queryParams;
    public ReplicapoolPoolsListRequest withQueryParams(ReplicapoolPoolsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReplicapoolPoolsListSecurity security;
    public ReplicapoolPoolsListRequest withSecurity(ReplicapoolPoolsListSecurity security) {
        this.security = security;
        return this;
    }
}