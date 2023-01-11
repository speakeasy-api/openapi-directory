package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTraceSinksPatchRequest {
    public CloudtraceProjectsTraceSinksPatchPathParams pathParams;
    public CloudtraceProjectsTraceSinksPatchRequest withPathParams(CloudtraceProjectsTraceSinksPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtraceProjectsTraceSinksPatchQueryParams queryParams;
    public CloudtraceProjectsTraceSinksPatchRequest withQueryParams(CloudtraceProjectsTraceSinksPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TraceSinkInput request;
    public CloudtraceProjectsTraceSinksPatchRequest withRequest(openapisdk.models.shared.TraceSinkInput request) {
        this.request = request;
        return this;
    }
    public CloudtraceProjectsTraceSinksPatchSecurity security;
    public CloudtraceProjectsTraceSinksPatchRequest withSecurity(CloudtraceProjectsTraceSinksPatchSecurity security) {
        this.security = security;
        return this;
    }
}