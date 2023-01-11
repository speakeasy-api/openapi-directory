package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest {
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest withPathParams(AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeSecurity security;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest withSecurity(AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeSecurity security) {
        this.security = security;
        return this;
    }
}