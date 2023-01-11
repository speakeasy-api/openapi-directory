package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsWatchAllRequest {
    public StorageObjectsWatchAllPathParams pathParams;
    public StorageObjectsWatchAllRequest withPathParams(StorageObjectsWatchAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsWatchAllQueryParams queryParams;
    public StorageObjectsWatchAllRequest withQueryParams(StorageObjectsWatchAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public StorageObjectsWatchAllRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public StorageObjectsWatchAllSecurity security;
    public StorageObjectsWatchAllRequest withSecurity(StorageObjectsWatchAllSecurity security) {
        this.security = security;
        return this;
    }
}