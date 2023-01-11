package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest {
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest withPathParams(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnsubscribeClientsRequest request;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest withRequest(openapisdk.models.shared.UnsubscribeClientsRequest request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity security;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest withSecurity(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsSecurity security) {
        this.security = security;
        return this;
    }
}