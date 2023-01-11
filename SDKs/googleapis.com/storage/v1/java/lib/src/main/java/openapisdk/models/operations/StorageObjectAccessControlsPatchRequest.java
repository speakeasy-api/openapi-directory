package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectAccessControlsPatchRequest {
    public StorageObjectAccessControlsPatchPathParams pathParams;
    public StorageObjectAccessControlsPatchRequest withPathParams(StorageObjectAccessControlsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectAccessControlsPatchQueryParams queryParams;
    public StorageObjectAccessControlsPatchRequest withQueryParams(StorageObjectAccessControlsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObjectAccessControl request;
    public StorageObjectAccessControlsPatchRequest withRequest(openapisdk.models.shared.ObjectAccessControl request) {
        this.request = request;
        return this;
    }
    public StorageObjectAccessControlsPatchSecurity security;
    public StorageObjectAccessControlsPatchRequest withSecurity(StorageObjectAccessControlsPatchSecurity security) {
        this.security = security;
        return this;
    }
}