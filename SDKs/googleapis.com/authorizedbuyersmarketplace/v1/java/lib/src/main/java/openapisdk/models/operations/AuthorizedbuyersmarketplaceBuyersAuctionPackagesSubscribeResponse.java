package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse {
    public openapisdk.models.shared.AuctionPackage auctionPackage;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse withAuctionPackage(openapisdk.models.shared.AuctionPackage auctionPackage) {
        this.auctionPackage = auctionPackage;
        return this;
    }
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}