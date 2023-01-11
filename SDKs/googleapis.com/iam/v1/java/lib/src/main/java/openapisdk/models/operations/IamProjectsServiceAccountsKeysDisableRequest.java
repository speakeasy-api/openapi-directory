package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsKeysDisableRequest {
    public IamProjectsServiceAccountsKeysDisablePathParams pathParams;
    public IamProjectsServiceAccountsKeysDisableRequest withPathParams(IamProjectsServiceAccountsKeysDisablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsKeysDisableQueryParams queryParams;
    public IamProjectsServiceAccountsKeysDisableRequest withQueryParams(IamProjectsServiceAccountsKeysDisableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public IamProjectsServiceAccountsKeysDisableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsKeysDisableSecurity security;
    public IamProjectsServiceAccountsKeysDisableRequest withSecurity(IamProjectsServiceAccountsKeysDisableSecurity security) {
        this.security = security;
        return this;
    }
}