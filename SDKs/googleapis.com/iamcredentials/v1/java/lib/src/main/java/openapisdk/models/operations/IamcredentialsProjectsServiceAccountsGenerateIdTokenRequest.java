package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest {
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenPathParams pathParams;
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest withPathParams(IamcredentialsProjectsServiceAccountsGenerateIdTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenQueryParams queryParams;
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest withQueryParams(IamcredentialsProjectsServiceAccountsGenerateIdTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateIdTokenRequest request;
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest withRequest(openapisdk.models.shared.GenerateIdTokenRequest request) {
        this.request = request;
        return this;
    }
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenSecurity security;
    public IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest withSecurity(IamcredentialsProjectsServiceAccountsGenerateIdTokenSecurity security) {
        this.security = security;
        return this;
    }
}