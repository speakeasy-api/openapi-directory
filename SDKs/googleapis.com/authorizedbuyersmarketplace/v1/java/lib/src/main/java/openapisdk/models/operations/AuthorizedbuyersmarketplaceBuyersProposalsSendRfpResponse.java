package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}