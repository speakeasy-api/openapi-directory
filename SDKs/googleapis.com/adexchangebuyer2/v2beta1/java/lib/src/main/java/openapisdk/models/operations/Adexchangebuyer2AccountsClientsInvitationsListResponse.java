package openapisdk.models.operations;



public class Adexchangebuyer2AccountsClientsInvitationsListResponse {
    public String contentType;
    public Adexchangebuyer2AccountsClientsInvitationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListClientUserInvitationsResponse listClientUserInvitationsResponse;
    public Adexchangebuyer2AccountsClientsInvitationsListResponse withListClientUserInvitationsResponse(openapisdk.models.shared.ListClientUserInvitationsResponse listClientUserInvitationsResponse) {
        this.listClientUserInvitationsResponse = listClientUserInvitationsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsClientsInvitationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}