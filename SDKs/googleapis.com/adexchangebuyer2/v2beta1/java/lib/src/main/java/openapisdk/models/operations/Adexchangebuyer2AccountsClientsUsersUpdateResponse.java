package openapisdk.models.operations;



public class Adexchangebuyer2AccountsClientsUsersUpdateResponse {
    public openapisdk.models.shared.ClientUser clientUser;
    public Adexchangebuyer2AccountsClientsUsersUpdateResponse withClientUser(openapisdk.models.shared.ClientUser clientUser) {
        this.clientUser = clientUser;
        return this;
    }
    public String contentType;
    public Adexchangebuyer2AccountsClientsUsersUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsClientsUsersUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}