package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacenotesInsertRequest {
    public AdexchangebuyerMarketplacenotesInsertPathParams pathParams;
    public AdexchangebuyerMarketplacenotesInsertRequest withPathParams(AdexchangebuyerMarketplacenotesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerMarketplacenotesInsertQueryParams queryParams;
    public AdexchangebuyerMarketplacenotesInsertRequest withQueryParams(AdexchangebuyerMarketplacenotesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddOrderNotesRequest request;
    public AdexchangebuyerMarketplacenotesInsertRequest withRequest(openapisdk.models.shared.AddOrderNotesRequest request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerMarketplacenotesInsertSecurity security;
    public AdexchangebuyerMarketplacenotesInsertRequest withSecurity(AdexchangebuyerMarketplacenotesInsertSecurity security) {
        this.security = security;
        return this;
    }
}