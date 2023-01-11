package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicapoolPoolsInsertRequest {
    public ReplicapoolPoolsInsertPathParams pathParams;
    public ReplicapoolPoolsInsertRequest withPathParams(ReplicapoolPoolsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolPoolsInsertQueryParams queryParams;
    public ReplicapoolPoolsInsertRequest withQueryParams(ReplicapoolPoolsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Pool request;
    public ReplicapoolPoolsInsertRequest withRequest(openapisdk.models.shared.Pool request) {
        this.request = request;
        return this;
    }
    public ReplicapoolPoolsInsertSecurity security;
    public ReplicapoolPoolsInsertRequest withSecurity(ReplicapoolPoolsInsertSecurity security) {
        this.security = security;
        return this;
    }
}