package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesPatchRequest {
    public ProdTtSasportalNodesNodesPatchPathParams pathParams;
    public ProdTtSasportalNodesNodesPatchRequest withPathParams(ProdTtSasportalNodesNodesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProdTtSasportalNodesNodesPatchQueryParams queryParams;
    public ProdTtSasportalNodesNodesPatchRequest withQueryParams(ProdTtSasportalNodesNodesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalNode request;
    public ProdTtSasportalNodesNodesPatchRequest withRequest(openapisdk.models.shared.SasPortalNode request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalNodesNodesPatchSecurity security;
    public ProdTtSasportalNodesNodesPatchRequest withSecurity(ProdTtSasportalNodesNodesPatchSecurity security) {
        this.security = security;
        return this;
    }
}