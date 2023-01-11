package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsKeysUploadRequest {
    public IamProjectsServiceAccountsKeysUploadPathParams pathParams;
    public IamProjectsServiceAccountsKeysUploadRequest withPathParams(IamProjectsServiceAccountsKeysUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsKeysUploadQueryParams queryParams;
    public IamProjectsServiceAccountsKeysUploadRequest withQueryParams(IamProjectsServiceAccountsKeysUploadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UploadServiceAccountKeyRequest request;
    public IamProjectsServiceAccountsKeysUploadRequest withRequest(openapisdk.models.shared.UploadServiceAccountKeyRequest request) {
        this.request = request;
        return this;
    }
    public IamProjectsServiceAccountsKeysUploadSecurity security;
    public IamProjectsServiceAccountsKeysUploadRequest withSecurity(IamProjectsServiceAccountsKeysUploadSecurity security) {
        this.security = security;
        return this;
    }
}