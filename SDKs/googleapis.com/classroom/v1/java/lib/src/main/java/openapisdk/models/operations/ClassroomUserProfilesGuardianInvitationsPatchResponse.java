package openapisdk.models.operations;



public class ClassroomUserProfilesGuardianInvitationsPatchResponse {
    public String contentType;
    public ClassroomUserProfilesGuardianInvitationsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GuardianInvitation guardianInvitation;
    public ClassroomUserProfilesGuardianInvitationsPatchResponse withGuardianInvitation(openapisdk.models.shared.GuardianInvitation guardianInvitation) {
        this.guardianInvitation = guardianInvitation;
        return this;
    }
    public Long statusCode;
    public ClassroomUserProfilesGuardianInvitationsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}