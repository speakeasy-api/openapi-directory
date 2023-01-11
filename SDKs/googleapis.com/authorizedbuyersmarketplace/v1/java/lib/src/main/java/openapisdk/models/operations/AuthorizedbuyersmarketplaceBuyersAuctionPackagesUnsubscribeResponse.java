package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse {
    public openapisdk.models.shared.AuctionPackage auctionPackage;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse withAuctionPackage(openapisdk.models.shared.AuctionPackage auctionPackage) {
        this.auctionPackage = auctionPackage;
        return this;
    }
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}