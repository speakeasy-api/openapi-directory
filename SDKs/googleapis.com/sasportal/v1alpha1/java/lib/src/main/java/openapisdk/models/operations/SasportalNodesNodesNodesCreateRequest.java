package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesNodesCreateRequest {
    public SasportalNodesNodesNodesCreatePathParams pathParams;
    public SasportalNodesNodesNodesCreateRequest withPathParams(SasportalNodesNodesNodesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesNodesNodesCreateQueryParams queryParams;
    public SasportalNodesNodesNodesCreateRequest withQueryParams(SasportalNodesNodesNodesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalNode request;
    public SasportalNodesNodesNodesCreateRequest withRequest(openapisdk.models.shared.SasPortalNode request) {
        this.request = request;
        return this;
    }
    public SasportalNodesNodesNodesCreateSecurity security;
    public SasportalNodesNodesNodesCreateRequest withSecurity(SasportalNodesNodesNodesCreateSecurity security) {
        this.security = security;
        return this;
    }
}