package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsUndeleteRequest {
    public IamProjectsServiceAccountsUndeletePathParams pathParams;
    public IamProjectsServiceAccountsUndeleteRequest withPathParams(IamProjectsServiceAccountsUndeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsUndeleteQueryParams queryParams;
    public IamProjectsServiceAccountsUndeleteRequest withQueryParams(IamProjectsServiceAccountsUndeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public IamProjectsServiceAccountsUndeleteRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsUndeleteSecurity security;
    public IamProjectsServiceAccountsUndeleteRequest withSecurity(IamProjectsServiceAccountsUndeleteSecurity security) {
        this.security = security;
        return this;
    }
}