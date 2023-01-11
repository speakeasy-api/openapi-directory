package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest {
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsPathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest withPathParams(AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscribeClientsRequest request;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest withRequest(openapisdk.models.shared.SubscribeClientsRequest request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsSecurity security;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest withSecurity(AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsSecurity security) {
        this.security = security;
        return this;
    }
}