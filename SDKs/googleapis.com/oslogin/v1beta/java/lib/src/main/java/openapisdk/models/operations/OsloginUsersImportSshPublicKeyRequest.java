package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersImportSshPublicKeyRequest {
    public OsloginUsersImportSshPublicKeyPathParams pathParams;
    public OsloginUsersImportSshPublicKeyRequest withPathParams(OsloginUsersImportSshPublicKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsloginUsersImportSshPublicKeyQueryParams queryParams;
    public OsloginUsersImportSshPublicKeyRequest withQueryParams(OsloginUsersImportSshPublicKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SshPublicKeyInput request;
    public OsloginUsersImportSshPublicKeyRequest withRequest(openapisdk.models.shared.SshPublicKeyInput request) {
        this.request = request;
        return this;
    }
    public OsloginUsersImportSshPublicKeySecurity security;
    public OsloginUsersImportSshPublicKeyRequest withSecurity(OsloginUsersImportSshPublicKeySecurity security) {
        this.security = security;
        return this;
    }
}