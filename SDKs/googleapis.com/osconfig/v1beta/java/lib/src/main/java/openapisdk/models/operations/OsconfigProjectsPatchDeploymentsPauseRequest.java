package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchDeploymentsPauseRequest {
    public OsconfigProjectsPatchDeploymentsPausePathParams pathParams;
    public OsconfigProjectsPatchDeploymentsPauseRequest withPathParams(OsconfigProjectsPatchDeploymentsPausePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsPauseQueryParams queryParams;
    public OsconfigProjectsPatchDeploymentsPauseRequest withQueryParams(OsconfigProjectsPatchDeploymentsPauseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public OsconfigProjectsPatchDeploymentsPauseRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsPauseSecurity security;
    public OsconfigProjectsPatchDeploymentsPauseRequest withSecurity(OsconfigProjectsPatchDeploymentsPauseSecurity security) {
        this.security = security;
        return this;
    }
}