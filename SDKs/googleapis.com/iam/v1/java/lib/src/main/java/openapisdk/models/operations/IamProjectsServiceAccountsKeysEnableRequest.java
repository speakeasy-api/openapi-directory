package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsKeysEnableRequest {
    public IamProjectsServiceAccountsKeysEnablePathParams pathParams;
    public IamProjectsServiceAccountsKeysEnableRequest withPathParams(IamProjectsServiceAccountsKeysEnablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsKeysEnableQueryParams queryParams;
    public IamProjectsServiceAccountsKeysEnableRequest withQueryParams(IamProjectsServiceAccountsKeysEnableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public IamProjectsServiceAccountsKeysEnableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsKeysEnableSecurity security;
    public IamProjectsServiceAccountsKeysEnableRequest withSecurity(IamProjectsServiceAccountsKeysEnableSecurity security) {
        this.security = security;
        return this;
    }
}