package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersSshPublicKeysCreateRequest {
    public OsloginUsersSshPublicKeysCreatePathParams pathParams;
    public OsloginUsersSshPublicKeysCreateRequest withPathParams(OsloginUsersSshPublicKeysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsloginUsersSshPublicKeysCreateQueryParams queryParams;
    public OsloginUsersSshPublicKeysCreateRequest withQueryParams(OsloginUsersSshPublicKeysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SshPublicKeyInput request;
    public OsloginUsersSshPublicKeysCreateRequest withRequest(openapisdk.models.shared.SshPublicKeyInput request) {
        this.request = request;
        return this;
    }
    public OsloginUsersSshPublicKeysCreateSecurity security;
    public OsloginUsersSshPublicKeysCreateRequest withSecurity(OsloginUsersSshPublicKeysCreateSecurity security) {
        this.security = security;
        return this;
    }
}