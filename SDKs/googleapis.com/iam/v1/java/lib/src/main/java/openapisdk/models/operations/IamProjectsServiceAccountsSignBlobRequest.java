package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsSignBlobRequest {
    public IamProjectsServiceAccountsSignBlobPathParams pathParams;
    public IamProjectsServiceAccountsSignBlobRequest withPathParams(IamProjectsServiceAccountsSignBlobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsSignBlobQueryParams queryParams;
    public IamProjectsServiceAccountsSignBlobRequest withQueryParams(IamProjectsServiceAccountsSignBlobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SignBlobRequest request;
    public IamProjectsServiceAccountsSignBlobRequest withRequest(openapisdk.models.shared.SignBlobRequest request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsSignBlobSecurity security;
    public IamProjectsServiceAccountsSignBlobRequest withSecurity(IamProjectsServiceAccountsSignBlobSecurity security) {
        this.security = security;
        return this;
    }
}