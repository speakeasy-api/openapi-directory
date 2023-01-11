package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListClientUsersResponse listClientUsersResponse;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse withListClientUsersResponse(openapisdk.models.shared.ListClientUsersResponse listClientUsersResponse) {
        this.listClientUsersResponse = listClientUsersResponse;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}