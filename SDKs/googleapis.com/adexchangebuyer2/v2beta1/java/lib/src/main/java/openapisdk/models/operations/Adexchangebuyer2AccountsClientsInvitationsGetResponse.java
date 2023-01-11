package openapisdk.models.operations;



public class Adexchangebuyer2AccountsClientsInvitationsGetResponse {
    public openapisdk.models.shared.ClientUserInvitation clientUserInvitation;
    public Adexchangebuyer2AccountsClientsInvitationsGetResponse withClientUserInvitation(openapisdk.models.shared.ClientUserInvitation clientUserInvitation) {
        this.clientUserInvitation = clientUserInvitation;
        return this;
    }
    public String contentType;
    public Adexchangebuyer2AccountsClientsInvitationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsClientsInvitationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}