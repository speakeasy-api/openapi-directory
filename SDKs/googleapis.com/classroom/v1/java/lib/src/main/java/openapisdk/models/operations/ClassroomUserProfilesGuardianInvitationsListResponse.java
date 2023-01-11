package openapisdk.models.operations;



public class ClassroomUserProfilesGuardianInvitationsListResponse {
    public String contentType;
    public ClassroomUserProfilesGuardianInvitationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGuardianInvitationsResponse listGuardianInvitationsResponse;
    public ClassroomUserProfilesGuardianInvitationsListResponse withListGuardianInvitationsResponse(openapisdk.models.shared.ListGuardianInvitationsResponse listGuardianInvitationsResponse) {
        this.listGuardianInvitationsResponse = listGuardianInvitationsResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomUserProfilesGuardianInvitationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}