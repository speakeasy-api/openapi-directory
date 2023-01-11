package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectAccessControlsInsertRequest {
    public StorageObjectAccessControlsInsertPathParams pathParams;
    public StorageObjectAccessControlsInsertRequest withPathParams(StorageObjectAccessControlsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectAccessControlsInsertQueryParams queryParams;
    public StorageObjectAccessControlsInsertRequest withQueryParams(StorageObjectAccessControlsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObjectAccessControl request;
    public StorageObjectAccessControlsInsertRequest withRequest(openapisdk.models.shared.ObjectAccessControl request) {
        this.request = request;
        return this;
    }
    public StorageObjectAccessControlsInsertSecurity security;
    public StorageObjectAccessControlsInsertRequest withSecurity(StorageObjectAccessControlsInsertSecurity security) {
        this.security = security;
        return this;
    }
}