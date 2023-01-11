package openapisdk.models.operations;



public class MybusinessAccountsInvitationsListResponse {
    public String contentType;
    public MybusinessAccountsInvitationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse;
    public MybusinessAccountsInvitationsListResponse withListInvitationsResponse(openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse) {
        this.listInvitationsResponse = listInvitationsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsInvitationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}