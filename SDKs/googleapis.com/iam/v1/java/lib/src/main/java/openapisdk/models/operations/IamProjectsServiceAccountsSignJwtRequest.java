package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsSignJwtRequest {
    public IamProjectsServiceAccountsSignJwtPathParams pathParams;
    public IamProjectsServiceAccountsSignJwtRequest withPathParams(IamProjectsServiceAccountsSignJwtPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsSignJwtQueryParams queryParams;
    public IamProjectsServiceAccountsSignJwtRequest withQueryParams(IamProjectsServiceAccountsSignJwtQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SignJwtRequest request;
    public IamProjectsServiceAccountsSignJwtRequest withRequest(openapisdk.models.shared.SignJwtRequest request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsSignJwtSecurity security;
    public IamProjectsServiceAccountsSignJwtRequest withSecurity(IamProjectsServiceAccountsSignJwtSecurity security) {
        this.security = security;
        return this;
    }
}