package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesMoveRequest {
    public ProdTtSasportalNodesNodesMovePathParams pathParams;
    public ProdTtSasportalNodesNodesMoveRequest withPathParams(ProdTtSasportalNodesNodesMovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProdTtSasportalNodesNodesMoveQueryParams queryParams;
    public ProdTtSasportalNodesNodesMoveRequest withQueryParams(ProdTtSasportalNodesNodesMoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalMoveNodeRequest request;
    public ProdTtSasportalNodesNodesMoveRequest withRequest(openapisdk.models.shared.SasPortalMoveNodeRequest request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalNodesNodesMoveSecurity security;
    public ProdTtSasportalNodesNodesMoveRequest withSecurity(ProdTtSasportalNodesNodesMoveSecurity security) {
        this.security = security;
        return this;
    }
}