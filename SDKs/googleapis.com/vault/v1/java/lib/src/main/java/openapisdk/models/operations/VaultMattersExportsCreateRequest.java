package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersExportsCreateRequest {
    public VaultMattersExportsCreatePathParams pathParams;
    public VaultMattersExportsCreateRequest withPathParams(VaultMattersExportsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersExportsCreateQueryParams queryParams;
    public VaultMattersExportsCreateRequest withQueryParams(VaultMattersExportsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Export request;
    public VaultMattersExportsCreateRequest withRequest(openapisdk.models.shared.Export request) {
        this.request = request;
        return this;
    }
    public VaultMattersExportsCreateSecurity security;
    public VaultMattersExportsCreateRequest withSecurity(VaultMattersExportsCreateSecurity security) {
        this.security = security;
        return this;
    }
}