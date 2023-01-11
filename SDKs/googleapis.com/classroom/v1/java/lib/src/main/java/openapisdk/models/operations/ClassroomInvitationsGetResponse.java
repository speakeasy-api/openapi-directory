package openapisdk.models.operations;



public class ClassroomInvitationsGetResponse {
    public String contentType;
    public ClassroomInvitationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Invitation invitation;
    public ClassroomInvitationsGetResponse withInvitation(openapisdk.models.shared.Invitation invitation) {
        this.invitation = invitation;
        return this;
    }
    public Long statusCode;
    public ClassroomInvitationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}