package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacedealsDeleteRequest {
    public AdexchangebuyerMarketplacedealsDeletePathParams pathParams;
    public AdexchangebuyerMarketplacedealsDeleteRequest withPathParams(AdexchangebuyerMarketplacedealsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerMarketplacedealsDeleteQueryParams queryParams;
    public AdexchangebuyerMarketplacedealsDeleteRequest withQueryParams(AdexchangebuyerMarketplacedealsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteOrderDealsRequest request;
    public AdexchangebuyerMarketplacedealsDeleteRequest withRequest(openapisdk.models.shared.DeleteOrderDealsRequest request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerMarketplacedealsDeleteSecurity security;
    public AdexchangebuyerMarketplacedealsDeleteRequest withSecurity(AdexchangebuyerMarketplacedealsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}