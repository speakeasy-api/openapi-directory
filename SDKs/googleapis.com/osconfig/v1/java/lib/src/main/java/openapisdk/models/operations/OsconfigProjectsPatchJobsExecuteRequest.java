package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchJobsExecuteRequest {
    public OsconfigProjectsPatchJobsExecutePathParams pathParams;
    public OsconfigProjectsPatchJobsExecuteRequest withPathParams(OsconfigProjectsPatchJobsExecutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsPatchJobsExecuteQueryParams queryParams;
    public OsconfigProjectsPatchJobsExecuteRequest withQueryParams(OsconfigProjectsPatchJobsExecuteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecutePatchJobRequest request;
    public OsconfigProjectsPatchJobsExecuteRequest withRequest(openapisdk.models.shared.ExecutePatchJobRequest request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsPatchJobsExecuteSecurity security;
    public OsconfigProjectsPatchJobsExecuteRequest withSecurity(OsconfigProjectsPatchJobsExecuteSecurity security) {
        this.security = security;
        return this;
    }
}