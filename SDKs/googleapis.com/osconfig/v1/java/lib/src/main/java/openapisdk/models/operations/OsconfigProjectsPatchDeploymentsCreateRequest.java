package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchDeploymentsCreateRequest {
    public OsconfigProjectsPatchDeploymentsCreatePathParams pathParams;
    public OsconfigProjectsPatchDeploymentsCreateRequest withPathParams(OsconfigProjectsPatchDeploymentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsCreateQueryParams queryParams;
    public OsconfigProjectsPatchDeploymentsCreateRequest withQueryParams(OsconfigProjectsPatchDeploymentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatchDeploymentInput request;
    public OsconfigProjectsPatchDeploymentsCreateRequest withRequest(openapisdk.models.shared.PatchDeploymentInput request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsCreateSecurity security;
    public OsconfigProjectsPatchDeploymentsCreateRequest withSecurity(OsconfigProjectsPatchDeploymentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}