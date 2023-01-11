package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectAccessControlsUpdateRequest {
    public StorageObjectAccessControlsUpdatePathParams pathParams;
    public StorageObjectAccessControlsUpdateRequest withPathParams(StorageObjectAccessControlsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectAccessControlsUpdateQueryParams queryParams;
    public StorageObjectAccessControlsUpdateRequest withQueryParams(StorageObjectAccessControlsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObjectAccessControl request;
    public StorageObjectAccessControlsUpdateRequest withRequest(openapisdk.models.shared.ObjectAccessControl request) {
        this.request = request;
        return this;
    }
    public StorageObjectAccessControlsUpdateSecurity security;
    public StorageObjectAccessControlsUpdateRequest withSecurity(StorageObjectAccessControlsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}