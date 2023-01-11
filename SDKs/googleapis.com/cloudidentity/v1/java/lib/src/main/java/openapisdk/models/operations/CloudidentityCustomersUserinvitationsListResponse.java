package openapisdk.models.operations;



public class CloudidentityCustomersUserinvitationsListResponse {
    public String contentType;
    public CloudidentityCustomersUserinvitationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListUserInvitationsResponse listUserInvitationsResponse;
    public CloudidentityCustomersUserinvitationsListResponse withListUserInvitationsResponse(openapisdk.models.shared.ListUserInvitationsResponse listUserInvitationsResponse) {
        this.listUserInvitationsResponse = listUserInvitationsResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityCustomersUserinvitationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}