package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTracesBatchWriteRequest {
    public CloudtraceProjectsTracesBatchWritePathParams pathParams;
    public CloudtraceProjectsTracesBatchWriteRequest withPathParams(CloudtraceProjectsTracesBatchWritePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtraceProjectsTracesBatchWriteQueryParams queryParams;
    public CloudtraceProjectsTracesBatchWriteRequest withQueryParams(CloudtraceProjectsTracesBatchWriteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchWriteSpansRequest request;
    public CloudtraceProjectsTracesBatchWriteRequest withRequest(openapisdk.models.shared.BatchWriteSpansRequest request) {
        this.request = request;
        return this;
    }
    public CloudtraceProjectsTracesBatchWriteSecurity security;
    public CloudtraceProjectsTracesBatchWriteRequest withSecurity(CloudtraceProjectsTracesBatchWriteSecurity security) {
        this.security = security;
        return this;
    }
}