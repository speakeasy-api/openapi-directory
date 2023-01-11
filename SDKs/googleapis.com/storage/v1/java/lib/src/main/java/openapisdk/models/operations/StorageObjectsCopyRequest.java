package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsCopyRequest {
    public StorageObjectsCopyPathParams pathParams;
    public StorageObjectsCopyRequest withPathParams(StorageObjectsCopyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsCopyQueryParams queryParams;
    public StorageObjectsCopyRequest withQueryParams(StorageObjectsCopyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Object request;
    public StorageObjectsCopyRequest withRequest(openapisdk.models.shared.Object request) {
        this.request = request;
        return this;
    }
    public StorageObjectsCopySecurity security;
    public StorageObjectsCopyRequest withSecurity(StorageObjectsCopySecurity security) {
        this.security = security;
        return this;
    }
}