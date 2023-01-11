package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse {
    public openapisdk.models.shared.ClientUser clientUser;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse withClientUser(openapisdk.models.shared.ClientUser clientUser) {
        this.clientUser = clientUser;
        return this;
    }
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}