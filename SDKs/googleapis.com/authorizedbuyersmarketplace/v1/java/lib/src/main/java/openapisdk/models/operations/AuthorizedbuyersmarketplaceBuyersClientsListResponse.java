package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersClientsListResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersClientsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListClientsResponse listClientsResponse;
    public AuthorizedbuyersmarketplaceBuyersClientsListResponse withListClientsResponse(openapisdk.models.shared.ListClientsResponse listClientsResponse) {
        this.listClientsResponse = listClientsResponse;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersClientsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}