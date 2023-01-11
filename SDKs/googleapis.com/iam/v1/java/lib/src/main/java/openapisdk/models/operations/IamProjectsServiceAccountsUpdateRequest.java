package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsUpdateRequest {
    public IamProjectsServiceAccountsUpdatePathParams pathParams;
    public IamProjectsServiceAccountsUpdateRequest withPathParams(IamProjectsServiceAccountsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsUpdateQueryParams queryParams;
    public IamProjectsServiceAccountsUpdateRequest withQueryParams(IamProjectsServiceAccountsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceAccountInput request;
    public IamProjectsServiceAccountsUpdateRequest withRequest(openapisdk.models.shared.ServiceAccountInput request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsUpdateSecurity security;
    public IamProjectsServiceAccountsUpdateRequest withSecurity(IamProjectsServiceAccountsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}