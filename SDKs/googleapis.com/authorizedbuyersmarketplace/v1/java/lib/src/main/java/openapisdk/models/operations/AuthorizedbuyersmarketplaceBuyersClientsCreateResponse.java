package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersClientsCreateResponse {
    public openapisdk.models.shared.Client client;
    public AuthorizedbuyersmarketplaceBuyersClientsCreateResponse withClient(openapisdk.models.shared.Client client) {
        this.client = client;
        return this;
    }
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersClientsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersClientsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}