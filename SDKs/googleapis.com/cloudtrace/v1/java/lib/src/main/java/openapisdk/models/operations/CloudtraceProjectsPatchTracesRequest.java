package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsPatchTracesRequest {
    public CloudtraceProjectsPatchTracesPathParams pathParams;
    public CloudtraceProjectsPatchTracesRequest withPathParams(CloudtraceProjectsPatchTracesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtraceProjectsPatchTracesQueryParams queryParams;
    public CloudtraceProjectsPatchTracesRequest withQueryParams(CloudtraceProjectsPatchTracesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Traces request;
    public CloudtraceProjectsPatchTracesRequest withRequest(openapisdk.models.shared.Traces request) {
        this.request = request;
        return this;
    }
    public CloudtraceProjectsPatchTracesSecurity security;
    public CloudtraceProjectsPatchTracesRequest withSecurity(CloudtraceProjectsPatchTracesSecurity security) {
        this.security = security;
        return this;
    }
}