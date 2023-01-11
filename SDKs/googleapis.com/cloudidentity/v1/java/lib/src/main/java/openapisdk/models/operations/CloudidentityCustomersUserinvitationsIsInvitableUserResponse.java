package openapisdk.models.operations;



public class CloudidentityCustomersUserinvitationsIsInvitableUserResponse {
    public String contentType;
    public CloudidentityCustomersUserinvitationsIsInvitableUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IsInvitableUserResponse isInvitableUserResponse;
    public CloudidentityCustomersUserinvitationsIsInvitableUserResponse withIsInvitableUserResponse(openapisdk.models.shared.IsInvitableUserResponse isInvitableUserResponse) {
        this.isInvitableUserResponse = isInvitableUserResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityCustomersUserinvitationsIsInvitableUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}