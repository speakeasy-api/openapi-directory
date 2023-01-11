package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsPatchRequest {
    public StorageDefaultObjectAccessControlsPatchPathParams pathParams;
    public StorageDefaultObjectAccessControlsPatchRequest withPathParams(StorageDefaultObjectAccessControlsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageDefaultObjectAccessControlsPatchQueryParams queryParams;
    public StorageDefaultObjectAccessControlsPatchRequest withQueryParams(StorageDefaultObjectAccessControlsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObjectAccessControl request;
    public StorageDefaultObjectAccessControlsPatchRequest withRequest(openapisdk.models.shared.ObjectAccessControl request) {
        this.request = request;
        return this;
    }
    public StorageDefaultObjectAccessControlsPatchSecurity security;
    public StorageDefaultObjectAccessControlsPatchRequest withSecurity(StorageDefaultObjectAccessControlsPatchSecurity security) {
        this.security = security;
        return this;
    }
}