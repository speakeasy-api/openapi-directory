package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest {
    public AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams pathParams;
    public AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest withPathParams(AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams queryParams;
    public AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest withQueryParams(AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePrivateAuctionProposalRequest request;
    public AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest withRequest(openapisdk.models.shared.UpdatePrivateAuctionProposalRequest request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity security;
    public AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest withSecurity(AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity security) {
        this.security = security;
        return this;
    }
}