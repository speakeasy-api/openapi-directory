package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsComposeRequest {
    public StorageObjectsComposePathParams pathParams;
    public StorageObjectsComposeRequest withPathParams(StorageObjectsComposePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsComposeQueryParams queryParams;
    public StorageObjectsComposeRequest withQueryParams(StorageObjectsComposeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ComposeRequest request;
    public StorageObjectsComposeRequest withRequest(openapisdk.models.shared.ComposeRequest request) {
        this.request = request;
        return this;
    }
    public StorageObjectsComposeSecurity security;
    public StorageObjectsComposeRequest withSecurity(StorageObjectsComposeSecurity security) {
        this.security = security;
        return this;
    }
}