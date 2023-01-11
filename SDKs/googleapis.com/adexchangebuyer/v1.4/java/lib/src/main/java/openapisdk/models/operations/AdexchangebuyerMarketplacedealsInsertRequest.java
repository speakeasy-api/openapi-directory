package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacedealsInsertRequest {
    public AdexchangebuyerMarketplacedealsInsertPathParams pathParams;
    public AdexchangebuyerMarketplacedealsInsertRequest withPathParams(AdexchangebuyerMarketplacedealsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerMarketplacedealsInsertQueryParams queryParams;
    public AdexchangebuyerMarketplacedealsInsertRequest withQueryParams(AdexchangebuyerMarketplacedealsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddOrderDealsRequest request;
    public AdexchangebuyerMarketplacedealsInsertRequest withRequest(openapisdk.models.shared.AddOrderDealsRequest request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerMarketplacedealsInsertSecurity security;
    public AdexchangebuyerMarketplacedealsInsertRequest withSecurity(AdexchangebuyerMarketplacedealsInsertSecurity security) {
        this.security = security;
        return this;
    }
}