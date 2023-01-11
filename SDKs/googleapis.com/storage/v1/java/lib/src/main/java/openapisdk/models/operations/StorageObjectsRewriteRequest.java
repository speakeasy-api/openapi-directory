package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsRewriteRequest {
    public StorageObjectsRewritePathParams pathParams;
    public StorageObjectsRewriteRequest withPathParams(StorageObjectsRewritePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsRewriteQueryParams queryParams;
    public StorageObjectsRewriteRequest withQueryParams(StorageObjectsRewriteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Object request;
    public StorageObjectsRewriteRequest withRequest(openapisdk.models.shared.Object request) {
        this.request = request;
        return this;
    }
    public StorageObjectsRewriteSecurity security;
    public StorageObjectsRewriteRequest withSecurity(StorageObjectsRewriteSecurity security) {
        this.security = security;
        return this;
    }
}