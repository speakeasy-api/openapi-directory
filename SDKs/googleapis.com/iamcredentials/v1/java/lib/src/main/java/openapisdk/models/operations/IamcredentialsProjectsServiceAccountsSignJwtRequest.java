package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamcredentialsProjectsServiceAccountsSignJwtRequest {
    public IamcredentialsProjectsServiceAccountsSignJwtPathParams pathParams;
    public IamcredentialsProjectsServiceAccountsSignJwtRequest withPathParams(IamcredentialsProjectsServiceAccountsSignJwtPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamcredentialsProjectsServiceAccountsSignJwtQueryParams queryParams;
    public IamcredentialsProjectsServiceAccountsSignJwtRequest withQueryParams(IamcredentialsProjectsServiceAccountsSignJwtQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SignJwtRequest request;
    public IamcredentialsProjectsServiceAccountsSignJwtRequest withRequest(openapisdk.models.shared.SignJwtRequest request) {
        this.request = request;
        return this;
    }
    public IamcredentialsProjectsServiceAccountsSignJwtSecurity security;
    public IamcredentialsProjectsServiceAccountsSignJwtRequest withSecurity(IamcredentialsProjectsServiceAccountsSignJwtSecurity security) {
        this.security = security;
        return this;
    }
}