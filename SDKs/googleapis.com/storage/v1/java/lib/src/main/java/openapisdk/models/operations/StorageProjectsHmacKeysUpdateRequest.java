package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsHmacKeysUpdateRequest {
    public StorageProjectsHmacKeysUpdatePathParams pathParams;
    public StorageProjectsHmacKeysUpdateRequest withPathParams(StorageProjectsHmacKeysUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageProjectsHmacKeysUpdateQueryParams queryParams;
    public StorageProjectsHmacKeysUpdateRequest withQueryParams(StorageProjectsHmacKeysUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HmacKeyMetadata request;
    public StorageProjectsHmacKeysUpdateRequest withRequest(openapisdk.models.shared.HmacKeyMetadata request) {
        this.request = request;
        return this;
    }
    public StorageProjectsHmacKeysUpdateSecurity security;
    public StorageProjectsHmacKeysUpdateRequest withSecurity(StorageProjectsHmacKeysUpdateSecurity security) {
        this.security = security;
        return this;
    }
}