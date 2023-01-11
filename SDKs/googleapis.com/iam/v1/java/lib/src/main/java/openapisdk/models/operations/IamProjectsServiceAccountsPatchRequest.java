package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsPatchRequest {
    public IamProjectsServiceAccountsPatchPathParams pathParams;
    public IamProjectsServiceAccountsPatchRequest withPathParams(IamProjectsServiceAccountsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsPatchQueryParams queryParams;
    public IamProjectsServiceAccountsPatchRequest withQueryParams(IamProjectsServiceAccountsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatchServiceAccountRequestInput request;
    public IamProjectsServiceAccountsPatchRequest withRequest(openapisdk.models.shared.PatchServiceAccountRequestInput request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsPatchSecurity security;
    public IamProjectsServiceAccountsPatchRequest withSecurity(IamProjectsServiceAccountsPatchSecurity security) {
        this.security = security;
        return this;
    }
}