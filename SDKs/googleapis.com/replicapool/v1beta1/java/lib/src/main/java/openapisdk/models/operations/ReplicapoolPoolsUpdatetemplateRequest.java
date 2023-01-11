package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicapoolPoolsUpdatetemplateRequest {
    public ReplicapoolPoolsUpdatetemplatePathParams pathParams;
    public ReplicapoolPoolsUpdatetemplateRequest withPathParams(ReplicapoolPoolsUpdatetemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplicapoolPoolsUpdatetemplateQueryParams queryParams;
    public ReplicapoolPoolsUpdatetemplateRequest withQueryParams(ReplicapoolPoolsUpdatetemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Template request;
    public ReplicapoolPoolsUpdatetemplateRequest withRequest(openapisdk.models.shared.Template request) {
        this.request = request;
        return this;
    }
    public ReplicapoolPoolsUpdatetemplateSecurity security;
    public ReplicapoolPoolsUpdatetemplateRequest withSecurity(ReplicapoolPoolsUpdatetemplateSecurity security) {
        this.security = security;
        return this;
    }
}