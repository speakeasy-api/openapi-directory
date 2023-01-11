package openapisdk.models.operations;



public class ReplicapoolReplicasListRequest {
    public ReplicapoolReplicasListPathParams pathParams;
    public ReplicapoolReplicasListRequest withPathParams(ReplicapoolReplicasListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolReplicasListQueryParams queryParams;
    public ReplicapoolReplicasListRequest withQueryParams(ReplicapoolReplicasListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReplicapoolReplicasListSecurity security;
    public ReplicapoolReplicasListRequest withSecurity(ReplicapoolReplicasListSecurity security) {
        this.security = security;
        return this;
    }
}