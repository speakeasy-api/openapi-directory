package openapisdk.models.operations;



public class Adexchangebuyer2AccountsClientsInvitationsCreateResponse {
    public openapisdk.models.shared.ClientUserInvitation clientUserInvitation;
    public Adexchangebuyer2AccountsClientsInvitationsCreateResponse withClientUserInvitation(openapisdk.models.shared.ClientUserInvitation clientUserInvitation) {
        this.clientUserInvitation = clientUserInvitation;
        return this;
    }
    public String contentType;
    public Adexchangebuyer2AccountsClientsInvitationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsClientsInvitationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}