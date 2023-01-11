package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest {
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPausePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest withPathParams(AuthorizedbuyersmarketplaceBuyersFinalizedDealsPausePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PauseFinalizedDealRequest request;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest withRequest(openapisdk.models.shared.PauseFinalizedDealRequest request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseSecurity security;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest withSecurity(AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseSecurity security) {
        this.security = security;
        return this;
    }
}