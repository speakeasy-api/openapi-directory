package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersProposalsListResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersProposalsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProposalsResponse listProposalsResponse;
    public AuthorizedbuyersmarketplaceBuyersProposalsListResponse withListProposalsResponse(openapisdk.models.shared.ListProposalsResponse listProposalsResponse) {
        this.listProposalsResponse = listProposalsResponse;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersProposalsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}