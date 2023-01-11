package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse {
    public openapisdk.models.shared.ClientUser clientUser;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse withClientUser(openapisdk.models.shared.ClientUser clientUser) {
        this.clientUser = clientUser;
        return this;
    }
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}