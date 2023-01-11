package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTraceSinksCreateRequest {
    public CloudtraceProjectsTraceSinksCreatePathParams pathParams;
    public CloudtraceProjectsTraceSinksCreateRequest withPathParams(CloudtraceProjectsTraceSinksCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtraceProjectsTraceSinksCreateQueryParams queryParams;
    public CloudtraceProjectsTraceSinksCreateRequest withQueryParams(CloudtraceProjectsTraceSinksCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TraceSinkInput request;
    public CloudtraceProjectsTraceSinksCreateRequest withRequest(openapisdk.models.shared.TraceSinkInput request) {
        this.request = request;
        return this;
    }
    public CloudtraceProjectsTraceSinksCreateSecurity security;
    public CloudtraceProjectsTraceSinksCreateRequest withSecurity(CloudtraceProjectsTraceSinksCreateSecurity security) {
        this.security = security;
        return this;
    }
}