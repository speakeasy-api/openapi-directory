package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}