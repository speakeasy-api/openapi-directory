package openapisdk.models.operations;



public class MybusinessaccountmanagementAccountsInvitationsListResponse {
    public String contentType;
    public MybusinessaccountmanagementAccountsInvitationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse;
    public MybusinessaccountmanagementAccountsInvitationsListResponse withListInvitationsResponse(openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse) {
        this.listInvitationsResponse = listInvitationsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessaccountmanagementAccountsInvitationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}