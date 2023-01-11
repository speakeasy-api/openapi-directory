package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deal deal;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse withDeal(openapisdk.models.shared.Deal deal) {
        this.deal = deal;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}