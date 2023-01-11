package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesPatchRequest {
    public SasportalNodesNodesPatchPathParams pathParams;
    public SasportalNodesNodesPatchRequest withPathParams(SasportalNodesNodesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesNodesPatchQueryParams queryParams;
    public SasportalNodesNodesPatchRequest withQueryParams(SasportalNodesNodesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalNode request;
    public SasportalNodesNodesPatchRequest withRequest(openapisdk.models.shared.SasPortalNode request) {
        this.request = request;
        return this;
    }
    public SasportalNodesNodesPatchSecurity security;
    public SasportalNodesNodesPatchRequest withSecurity(SasportalNodesNodesPatchSecurity security) {
        this.security = security;
        return this;
    }
}