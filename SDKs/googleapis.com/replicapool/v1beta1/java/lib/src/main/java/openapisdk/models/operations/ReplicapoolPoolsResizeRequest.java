package openapisdk.models.operations;



public class ReplicapoolPoolsResizeRequest {
    public ReplicapoolPoolsResizePathParams pathParams;
    public ReplicapoolPoolsResizeRequest withPathParams(ReplicapoolPoolsResizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolPoolsResizeQueryParams queryParams;
    public ReplicapoolPoolsResizeRequest withQueryParams(ReplicapoolPoolsResizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReplicapoolPoolsResizeSecurity security;
    public ReplicapoolPoolsResizeRequest withSecurity(ReplicapoolPoolsResizeSecurity security) {
        this.security = security;
        return this;
    }
}