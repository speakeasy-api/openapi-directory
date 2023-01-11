package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsBrandsCreateRequest {
    public IapProjectsBrandsCreatePathParams pathParams;
    public IapProjectsBrandsCreateRequest withPathParams(IapProjectsBrandsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapProjectsBrandsCreateQueryParams queryParams;
    public IapProjectsBrandsCreateRequest withQueryParams(IapProjectsBrandsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BrandInput request;
    public IapProjectsBrandsCreateRequest withRequest(openapisdk.models.shared.BrandInput request) {
        this.request = request;
        return this;
    }
    public IapProjectsBrandsCreateSecurity security;
    public IapProjectsBrandsCreateRequest withSecurity(IapProjectsBrandsCreateSecurity security) {
        this.security = security;
        return this;
    }
}