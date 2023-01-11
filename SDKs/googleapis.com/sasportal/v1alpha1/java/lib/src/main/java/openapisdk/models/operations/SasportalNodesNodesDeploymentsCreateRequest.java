package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesDeploymentsCreateRequest {
    public SasportalNodesNodesDeploymentsCreatePathParams pathParams;
    public SasportalNodesNodesDeploymentsCreateRequest withPathParams(SasportalNodesNodesDeploymentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesNodesDeploymentsCreateQueryParams queryParams;
    public SasportalNodesNodesDeploymentsCreateRequest withQueryParams(SasportalNodesNodesDeploymentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalDeploymentInput request;
    public SasportalNodesNodesDeploymentsCreateRequest withRequest(openapisdk.models.shared.SasPortalDeploymentInput request) {
        this.request = request;
        return this;
    }
    public SasportalNodesNodesDeploymentsCreateSecurity security;
    public SasportalNodesNodesDeploymentsCreateRequest withSecurity(SasportalNodesNodesDeploymentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}