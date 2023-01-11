package openapisdk.models.operations;



public class Adexchangebuyer2AccountsClientsUsersGetResponse {
    public openapisdk.models.shared.ClientUser clientUser;
    public Adexchangebuyer2AccountsClientsUsersGetResponse withClientUser(openapisdk.models.shared.ClientUser clientUser) {
        this.clientUser = clientUser;
        return this;
    }
    public String contentType;
    public Adexchangebuyer2AccountsClientsUsersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsClientsUsersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}