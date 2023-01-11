package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesNodesCreateRequest {
    public ProdTtSasportalNodesNodesNodesCreatePathParams pathParams;
    public ProdTtSasportalNodesNodesNodesCreateRequest withPathParams(ProdTtSasportalNodesNodesNodesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProdTtSasportalNodesNodesNodesCreateQueryParams queryParams;
    public ProdTtSasportalNodesNodesNodesCreateRequest withQueryParams(ProdTtSasportalNodesNodesNodesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalNode request;
    public ProdTtSasportalNodesNodesNodesCreateRequest withRequest(openapisdk.models.shared.SasPortalNode request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalNodesNodesNodesCreateSecurity security;
    public ProdTtSasportalNodesNodesNodesCreateRequest withSecurity(ProdTtSasportalNodesNodesNodesCreateSecurity security) {
        this.security = security;
        return this;
    }
}