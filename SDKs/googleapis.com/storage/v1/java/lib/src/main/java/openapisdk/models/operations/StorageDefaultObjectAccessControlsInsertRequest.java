package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsInsertRequest {
    public StorageDefaultObjectAccessControlsInsertPathParams pathParams;
    public StorageDefaultObjectAccessControlsInsertRequest withPathParams(StorageDefaultObjectAccessControlsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageDefaultObjectAccessControlsInsertQueryParams queryParams;
    public StorageDefaultObjectAccessControlsInsertRequest withQueryParams(StorageDefaultObjectAccessControlsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObjectAccessControl request;
    public StorageDefaultObjectAccessControlsInsertRequest withRequest(openapisdk.models.shared.ObjectAccessControl request) {
        this.request = request;
        return this;
    }
    public StorageDefaultObjectAccessControlsInsertSecurity security;
    public StorageDefaultObjectAccessControlsInsertRequest withSecurity(StorageDefaultObjectAccessControlsInsertSecurity security) {
        this.security = security;
        return this;
    }
}