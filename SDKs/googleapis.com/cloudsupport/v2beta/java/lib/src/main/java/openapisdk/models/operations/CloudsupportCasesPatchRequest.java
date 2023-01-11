package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportCasesPatchRequest {
    public CloudsupportCasesPatchPathParams pathParams;
    public CloudsupportCasesPatchRequest withPathParams(CloudsupportCasesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudsupportCasesPatchQueryParams queryParams;
    public CloudsupportCasesPatchRequest withQueryParams(CloudsupportCasesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CaseInput request;
    public CloudsupportCasesPatchRequest withRequest(openapisdk.models.shared.CaseInput request) {
        this.request = request;
        return this;
    }
    public CloudsupportCasesPatchSecurity security;
    public CloudsupportCasesPatchRequest withSecurity(CloudsupportCasesPatchSecurity security) {
        this.security = security;
        return this;
    }
}