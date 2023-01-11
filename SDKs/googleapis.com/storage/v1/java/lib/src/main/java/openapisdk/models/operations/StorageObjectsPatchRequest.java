package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsPatchRequest {
    public StorageObjectsPatchPathParams pathParams;
    public StorageObjectsPatchRequest withPathParams(StorageObjectsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsPatchQueryParams queryParams;
    public StorageObjectsPatchRequest withQueryParams(StorageObjectsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Object request;
    public StorageObjectsPatchRequest withRequest(openapisdk.models.shared.Object request) {
        this.request = request;
        return this;
    }
    public StorageObjectsPatchSecurity security;
    public StorageObjectsPatchRequest withSecurity(StorageObjectsPatchSecurity security) {
        this.security = security;
        return this;
    }
}