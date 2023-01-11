package openapisdk.models.operations;



public class Adexchangebuyer2AccountsClientsUsersListResponse {
    public String contentType;
    public Adexchangebuyer2AccountsClientsUsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListClientUsersResponse listClientUsersResponse;
    public Adexchangebuyer2AccountsClientsUsersListResponse withListClientUsersResponse(openapisdk.models.shared.ListClientUsersResponse listClientUsersResponse) {
        this.listClientUsersResponse = listClientUsersResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsClientsUsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}