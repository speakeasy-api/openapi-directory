package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchDeploymentsResumeRequest {
    public OsconfigProjectsPatchDeploymentsResumePathParams pathParams;
    public OsconfigProjectsPatchDeploymentsResumeRequest withPathParams(OsconfigProjectsPatchDeploymentsResumePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsResumeQueryParams queryParams;
    public OsconfigProjectsPatchDeploymentsResumeRequest withQueryParams(OsconfigProjectsPatchDeploymentsResumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public OsconfigProjectsPatchDeploymentsResumeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsResumeSecurity security;
    public OsconfigProjectsPatchDeploymentsResumeRequest withSecurity(OsconfigProjectsPatchDeploymentsResumeSecurity security) {
        this.security = security;
        return this;
    }
}