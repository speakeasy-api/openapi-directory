package openapisdk.models.operations;



public class ClassroomUserProfilesGuardianInvitationsGetResponse {
    public String contentType;
    public ClassroomUserProfilesGuardianInvitationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GuardianInvitation guardianInvitation;
    public ClassroomUserProfilesGuardianInvitationsGetResponse withGuardianInvitation(openapisdk.models.shared.GuardianInvitation guardianInvitation) {
        this.guardianInvitation = guardianInvitation;
        return this;
    }
    public Long statusCode;
    public ClassroomUserProfilesGuardianInvitationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}