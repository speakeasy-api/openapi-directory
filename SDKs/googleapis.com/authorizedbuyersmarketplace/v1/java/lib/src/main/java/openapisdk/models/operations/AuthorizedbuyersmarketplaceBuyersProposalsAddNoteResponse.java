package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}