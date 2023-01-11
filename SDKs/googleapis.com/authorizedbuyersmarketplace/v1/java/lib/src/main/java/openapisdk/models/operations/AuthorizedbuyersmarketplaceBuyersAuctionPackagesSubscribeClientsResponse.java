package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse {
    public openapisdk.models.shared.AuctionPackage auctionPackage;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse withAuctionPackage(openapisdk.models.shared.AuctionPackage auctionPackage) {
        this.auctionPackage = auctionPackage;
        return this;
    }
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}