package openapisdk.models.operations;



public class ClassroomUserProfilesGuardianInvitationsCreateResponse {
    public String contentType;
    public ClassroomUserProfilesGuardianInvitationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GuardianInvitation guardianInvitation;
    public ClassroomUserProfilesGuardianInvitationsCreateResponse withGuardianInvitation(openapisdk.models.shared.GuardianInvitation guardianInvitation) {
        this.guardianInvitation = guardianInvitation;
        return this;
    }
    public Long statusCode;
    public ClassroomUserProfilesGuardianInvitationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}