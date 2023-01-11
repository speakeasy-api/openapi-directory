package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsCreateRequest {
    public IamProjectsServiceAccountsCreatePathParams pathParams;
    public IamProjectsServiceAccountsCreateRequest withPathParams(IamProjectsServiceAccountsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsCreateQueryParams queryParams;
    public IamProjectsServiceAccountsCreateRequest withQueryParams(IamProjectsServiceAccountsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateServiceAccountRequestInput request;
    public IamProjectsServiceAccountsCreateRequest withRequest(openapisdk.models.shared.CreateServiceAccountRequestInput request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsCreateSecurity security;
    public IamProjectsServiceAccountsCreateRequest withSecurity(IamProjectsServiceAccountsCreateSecurity security) {
        this.security = security;
        return this;
    }
}