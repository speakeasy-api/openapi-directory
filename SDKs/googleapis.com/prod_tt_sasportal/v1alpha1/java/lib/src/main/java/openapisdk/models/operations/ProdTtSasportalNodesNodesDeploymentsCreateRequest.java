package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesDeploymentsCreateRequest {
    public ProdTtSasportalNodesNodesDeploymentsCreatePathParams pathParams;
    public ProdTtSasportalNodesNodesDeploymentsCreateRequest withPathParams(ProdTtSasportalNodesNodesDeploymentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProdTtSasportalNodesNodesDeploymentsCreateQueryParams queryParams;
    public ProdTtSasportalNodesNodesDeploymentsCreateRequest withQueryParams(ProdTtSasportalNodesNodesDeploymentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalDeploymentInput request;
    public ProdTtSasportalNodesNodesDeploymentsCreateRequest withRequest(openapisdk.models.shared.SasPortalDeploymentInput request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalNodesNodesDeploymentsCreateSecurity security;
    public ProdTtSasportalNodesNodesDeploymentsCreateRequest withSecurity(ProdTtSasportalNodesNodesDeploymentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}