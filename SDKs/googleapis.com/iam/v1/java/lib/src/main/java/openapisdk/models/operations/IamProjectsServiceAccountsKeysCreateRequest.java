package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsKeysCreateRequest {
    public IamProjectsServiceAccountsKeysCreatePathParams pathParams;
    public IamProjectsServiceAccountsKeysCreateRequest withPathParams(IamProjectsServiceAccountsKeysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsKeysCreateQueryParams queryParams;
    public IamProjectsServiceAccountsKeysCreateRequest withQueryParams(IamProjectsServiceAccountsKeysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateServiceAccountKeyRequest request;
    public IamProjectsServiceAccountsKeysCreateRequest withRequest(openapisdk.models.shared.CreateServiceAccountKeyRequest request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsKeysCreateSecurity security;
    public IamProjectsServiceAccountsKeysCreateRequest withSecurity(IamProjectsServiceAccountsKeysCreateSecurity security) {
        this.security = security;
        return this;
    }
}