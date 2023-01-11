package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicapoolPoolsDeleteRequest {
    public ReplicapoolPoolsDeletePathParams pathParams;
    public ReplicapoolPoolsDeleteRequest withPathParams(ReplicapoolPoolsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolPoolsDeleteQueryParams queryParams;
    public ReplicapoolPoolsDeleteRequest withQueryParams(ReplicapoolPoolsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PoolsDeleteRequest request;
    public ReplicapoolPoolsDeleteRequest withRequest(openapisdk.models.shared.PoolsDeleteRequest request) {
        this.request = request;
        return this;
    }
    public ReplicapoolPoolsDeleteSecurity security;
    public ReplicapoolPoolsDeleteRequest withSecurity(ReplicapoolPoolsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}