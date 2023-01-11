package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacedealsUpdateRequest {
    public AdexchangebuyerMarketplacedealsUpdatePathParams pathParams;
    public AdexchangebuyerMarketplacedealsUpdateRequest withPathParams(AdexchangebuyerMarketplacedealsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerMarketplacedealsUpdateQueryParams queryParams;
    public AdexchangebuyerMarketplacedealsUpdateRequest withQueryParams(AdexchangebuyerMarketplacedealsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EditAllOrderDealsRequest request;
    public AdexchangebuyerMarketplacedealsUpdateRequest withRequest(openapisdk.models.shared.EditAllOrderDealsRequest request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerMarketplacedealsUpdateSecurity security;
    public AdexchangebuyerMarketplacedealsUpdateRequest withSecurity(AdexchangebuyerMarketplacedealsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}