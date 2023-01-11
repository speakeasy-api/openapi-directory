package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchDeploymentsPatchRequest {
    public OsconfigProjectsPatchDeploymentsPatchPathParams pathParams;
    public OsconfigProjectsPatchDeploymentsPatchRequest withPathParams(OsconfigProjectsPatchDeploymentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsPatchQueryParams queryParams;
    public OsconfigProjectsPatchDeploymentsPatchRequest withQueryParams(OsconfigProjectsPatchDeploymentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatchDeploymentInput request;
    public OsconfigProjectsPatchDeploymentsPatchRequest withRequest(openapisdk.models.shared.PatchDeploymentInput request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsPatchSecurity security;
    public OsconfigProjectsPatchDeploymentsPatchRequest withSecurity(OsconfigProjectsPatchDeploymentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}