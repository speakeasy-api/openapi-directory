package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsUpdateRequest {
    public StorageObjectsUpdatePathParams pathParams;
    public StorageObjectsUpdateRequest withPathParams(StorageObjectsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsUpdateQueryParams queryParams;
    public StorageObjectsUpdateRequest withQueryParams(StorageObjectsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Object request;
    public StorageObjectsUpdateRequest withRequest(openapisdk.models.shared.Object request) {
        this.request = request;
        return this;
    }
    public StorageObjectsUpdateSecurity security;
    public StorageObjectsUpdateRequest withSecurity(StorageObjectsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}