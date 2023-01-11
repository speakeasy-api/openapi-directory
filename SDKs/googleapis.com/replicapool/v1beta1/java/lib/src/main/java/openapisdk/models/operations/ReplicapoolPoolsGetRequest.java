package openapisdk.models.operations;



public class ReplicapoolPoolsGetRequest {
    public ReplicapoolPoolsGetPathParams pathParams;
    public ReplicapoolPoolsGetRequest withPathParams(ReplicapoolPoolsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolPoolsGetQueryParams queryParams;
    public ReplicapoolPoolsGetRequest withQueryParams(ReplicapoolPoolsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReplicapoolPoolsGetSecurity security;
    public ReplicapoolPoolsGetRequest withSecurity(ReplicapoolPoolsGetSecurity security) {
        this.security = security;
        return this;
    }
}