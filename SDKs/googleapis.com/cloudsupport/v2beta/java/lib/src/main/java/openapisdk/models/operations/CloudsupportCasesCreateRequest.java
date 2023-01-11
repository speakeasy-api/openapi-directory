package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportCasesCreateRequest {
    public CloudsupportCasesCreatePathParams pathParams;
    public CloudsupportCasesCreateRequest withPathParams(CloudsupportCasesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudsupportCasesCreateQueryParams queryParams;
    public CloudsupportCasesCreateRequest withQueryParams(CloudsupportCasesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CaseInput request;
    public CloudsupportCasesCreateRequest withRequest(openapisdk.models.shared.CaseInput request) {
        this.request = request;
        return this;
    }
    public CloudsupportCasesCreateSecurity security;
    public CloudsupportCasesCreateRequest withSecurity(CloudsupportCasesCreateSecurity security) {
        this.security = security;
        return this;
    }
}