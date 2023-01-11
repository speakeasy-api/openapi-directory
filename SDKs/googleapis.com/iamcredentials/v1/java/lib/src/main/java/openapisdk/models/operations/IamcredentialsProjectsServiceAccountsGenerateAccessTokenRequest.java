package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest {
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams pathParams;
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest withPathParams(IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams queryParams;
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest withQueryParams(IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateAccessTokenRequest request;
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest withRequest(openapisdk.models.shared.GenerateAccessTokenRequest request) {
        this.request = request;
        return this;
    }
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity security;
    public IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest withSecurity(IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity security) {
        this.security = security;
        return this;
    }
}