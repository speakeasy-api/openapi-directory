package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDealsResponse listDealsResponse;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse withListDealsResponse(openapisdk.models.shared.ListDealsResponse listDealsResponse) {
        this.listDealsResponse = listDealsResponse;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}