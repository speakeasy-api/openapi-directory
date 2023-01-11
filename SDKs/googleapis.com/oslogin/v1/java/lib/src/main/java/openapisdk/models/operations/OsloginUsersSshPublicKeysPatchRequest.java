package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersSshPublicKeysPatchRequest {
    public OsloginUsersSshPublicKeysPatchPathParams pathParams;
    public OsloginUsersSshPublicKeysPatchRequest withPathParams(OsloginUsersSshPublicKeysPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsloginUsersSshPublicKeysPatchQueryParams queryParams;
    public OsloginUsersSshPublicKeysPatchRequest withQueryParams(OsloginUsersSshPublicKeysPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SshPublicKeyInput request;
    public OsloginUsersSshPublicKeysPatchRequest withRequest(openapisdk.models.shared.SshPublicKeyInput request) {
        this.request = request;
        return this;
    }
    public OsloginUsersSshPublicKeysPatchSecurity security;
    public OsloginUsersSshPublicKeysPatchRequest withSecurity(OsloginUsersSshPublicKeysPatchSecurity security) {
        this.security = security;
        return this;
    }
}