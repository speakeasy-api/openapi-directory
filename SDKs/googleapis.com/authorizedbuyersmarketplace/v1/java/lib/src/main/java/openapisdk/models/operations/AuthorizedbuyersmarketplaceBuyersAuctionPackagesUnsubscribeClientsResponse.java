package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse {
    public openapisdk.models.shared.AuctionPackage auctionPackage;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse withAuctionPackage(openapisdk.models.shared.AuctionPackage auctionPackage) {
        this.auctionPackage = auctionPackage;
        return this;
    }
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}