package openapisdk.models.operations;



public class ReplicapoolReplicasGetRequest {
    public ReplicapoolReplicasGetPathParams pathParams;
    public ReplicapoolReplicasGetRequest withPathParams(ReplicapoolReplicasGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolReplicasGetQueryParams queryParams;
    public ReplicapoolReplicasGetRequest withQueryParams(ReplicapoolReplicasGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReplicapoolReplicasGetSecurity security;
    public ReplicapoolReplicasGetRequest withSecurity(ReplicapoolReplicasGetSecurity security) {
        this.security = security;
        return this;
    }
}