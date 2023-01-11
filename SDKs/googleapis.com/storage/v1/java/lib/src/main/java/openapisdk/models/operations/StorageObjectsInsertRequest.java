package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsInsertRequest {
    public StorageObjectsInsertPathParams pathParams;
    public StorageObjectsInsertRequest withPathParams(StorageObjectsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsInsertQueryParams queryParams;
    public StorageObjectsInsertRequest withQueryParams(StorageObjectsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public StorageObjectsInsertRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public StorageObjectsInsertSecurity security;
    public StorageObjectsInsertRequest withSecurity(StorageObjectsInsertSecurity security) {
        this.security = security;
        return this;
    }
}