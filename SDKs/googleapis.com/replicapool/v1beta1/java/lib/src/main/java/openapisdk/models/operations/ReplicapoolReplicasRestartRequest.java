package openapisdk.models.operations;



public class ReplicapoolReplicasRestartRequest {
    public ReplicapoolReplicasRestartPathParams pathParams;
    public ReplicapoolReplicasRestartRequest withPathParams(ReplicapoolReplicasRestartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolReplicasRestartQueryParams queryParams;
    public ReplicapoolReplicasRestartRequest withQueryParams(ReplicapoolReplicasRestartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReplicapoolReplicasRestartSecurity security;
    public ReplicapoolReplicasRestartRequest withSecurity(ReplicapoolReplicasRestartSecurity security) {
        this.security = security;
        return this;
    }
}