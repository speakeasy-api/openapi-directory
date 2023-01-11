package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFinalizedDealsResponse listFinalizedDealsResponse;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse withListFinalizedDealsResponse(openapisdk.models.shared.ListFinalizedDealsResponse listFinalizedDealsResponse) {
        this.listFinalizedDealsResponse = listFinalizedDealsResponse;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}