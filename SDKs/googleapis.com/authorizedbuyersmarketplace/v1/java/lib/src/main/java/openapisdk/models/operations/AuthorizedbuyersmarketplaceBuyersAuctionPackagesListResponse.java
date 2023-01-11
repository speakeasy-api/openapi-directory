package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAuctionPackagesResponse listAuctionPackagesResponse;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse withListAuctionPackagesResponse(openapisdk.models.shared.ListAuctionPackagesResponse listAuctionPackagesResponse) {
        this.listAuctionPackagesResponse = listAuctionPackagesResponse;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}