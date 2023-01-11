package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest {
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest withPathParams(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeSecurity security;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest withSecurity(AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeSecurity security) {
        this.security = security;
        return this;
    }
}