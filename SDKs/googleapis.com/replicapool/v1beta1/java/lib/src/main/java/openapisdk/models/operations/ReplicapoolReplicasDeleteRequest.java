package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicapoolReplicasDeleteRequest {
    public ReplicapoolReplicasDeletePathParams pathParams;
    public ReplicapoolReplicasDeleteRequest withPathParams(ReplicapoolReplicasDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolReplicasDeleteQueryParams queryParams;
    public ReplicapoolReplicasDeleteRequest withQueryParams(ReplicapoolReplicasDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReplicasDeleteRequest request;
    public ReplicapoolReplicasDeleteRequest withRequest(openapisdk.models.shared.ReplicasDeleteRequest request) {
        this.request = request;
        return this;
    }
    public ReplicapoolReplicasDeleteSecurity security;
    public ReplicapoolReplicasDeleteRequest withSecurity(ReplicapoolReplicasDeleteSecurity security) {
        this.security = security;
        return this;
    }
}