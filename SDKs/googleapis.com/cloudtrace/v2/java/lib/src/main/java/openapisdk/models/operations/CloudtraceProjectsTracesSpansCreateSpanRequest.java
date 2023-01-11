package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTracesSpansCreateSpanRequest {
    public CloudtraceProjectsTracesSpansCreateSpanPathParams pathParams;
    public CloudtraceProjectsTracesSpansCreateSpanRequest withPathParams(CloudtraceProjectsTracesSpansCreateSpanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtraceProjectsTracesSpansCreateSpanQueryParams queryParams;
    public CloudtraceProjectsTracesSpansCreateSpanRequest withQueryParams(CloudtraceProjectsTracesSpansCreateSpanQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Span request;
    public CloudtraceProjectsTracesSpansCreateSpanRequest withRequest(openapisdk.models.shared.Span request) {
        this.request = request;
        return this;
    }
    public CloudtraceProjectsTracesSpansCreateSpanSecurity security;
    public CloudtraceProjectsTracesSpansCreateSpanRequest withSecurity(CloudtraceProjectsTracesSpansCreateSpanSecurity security) {
        this.security = security;
        return this;
    }
}