package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsUpdateRequest {
    public StorageDefaultObjectAccessControlsUpdatePathParams pathParams;
    public StorageDefaultObjectAccessControlsUpdateRequest withPathParams(StorageDefaultObjectAccessControlsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageDefaultObjectAccessControlsUpdateQueryParams queryParams;
    public StorageDefaultObjectAccessControlsUpdateRequest withQueryParams(StorageDefaultObjectAccessControlsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObjectAccessControl request;
    public StorageDefaultObjectAccessControlsUpdateRequest withRequest(openapisdk.models.shared.ObjectAccessControl request) {
        this.request = request;
        return this;
    }
    public StorageDefaultObjectAccessControlsUpdateSecurity security;
    public StorageDefaultObjectAccessControlsUpdateRequest withSecurity(StorageDefaultObjectAccessControlsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}