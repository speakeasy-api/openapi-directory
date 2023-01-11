package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}