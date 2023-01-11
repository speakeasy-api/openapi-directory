package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentPosSaleRequest {
    public ContentPosSalePathParams pathParams;
    public ContentPosSaleRequest withPathParams(ContentPosSalePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentPosSaleQueryParams queryParams;
    public ContentPosSaleRequest withQueryParams(ContentPosSaleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PosSaleRequest request;
    public ContentPosSaleRequest withRequest(openapisdk.models.shared.PosSaleRequest request) {
        this.request = request;
        return this;
    }
    public ContentPosSaleSecurity security;
    public ContentPosSaleRequest withSecurity(ContentPosSaleSecurity security) {
        this.security = security;
        return this;
    }
}