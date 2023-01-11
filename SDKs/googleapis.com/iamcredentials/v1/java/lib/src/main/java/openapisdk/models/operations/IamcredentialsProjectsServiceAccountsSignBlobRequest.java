package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamcredentialsProjectsServiceAccountsSignBlobRequest {
    public IamcredentialsProjectsServiceAccountsSignBlobPathParams pathParams;
    public IamcredentialsProjectsServiceAccountsSignBlobRequest withPathParams(IamcredentialsProjectsServiceAccountsSignBlobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamcredentialsProjectsServiceAccountsSignBlobQueryParams queryParams;
    public IamcredentialsProjectsServiceAccountsSignBlobRequest withQueryParams(IamcredentialsProjectsServiceAccountsSignBlobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SignBlobRequest request;
    public IamcredentialsProjectsServiceAccountsSignBlobRequest withRequest(openapisdk.models.shared.SignBlobRequest request) {
        this.request = request;
        return this;
    }
    public IamcredentialsProjectsServiceAccountsSignBlobSecurity security;
    public IamcredentialsProjectsServiceAccountsSignBlobRequest withSecurity(IamcredentialsProjectsServiceAccountsSignBlobSecurity security) {
        this.security = security;
        return this;
    }
}