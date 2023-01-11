package openapisdk.models.operations;



public class ClassroomInvitationsCreateResponse {
    public String contentType;
    public ClassroomInvitationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Invitation invitation;
    public ClassroomInvitationsCreateResponse withInvitation(openapisdk.models.shared.Invitation invitation) {
        this.invitation = invitation;
        return this;
    }
    public Long statusCode;
    public ClassroomInvitationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}