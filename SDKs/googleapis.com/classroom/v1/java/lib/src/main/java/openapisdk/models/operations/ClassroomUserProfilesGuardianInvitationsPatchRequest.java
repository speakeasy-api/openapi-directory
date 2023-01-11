package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomUserProfilesGuardianInvitationsPatchRequest {
    public ClassroomUserProfilesGuardianInvitationsPatchPathParams pathParams;
    public ClassroomUserProfilesGuardianInvitationsPatchRequest withPathParams(ClassroomUserProfilesGuardianInvitationsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomUserProfilesGuardianInvitationsPatchQueryParams queryParams;
    public ClassroomUserProfilesGuardianInvitationsPatchRequest withQueryParams(ClassroomUserProfilesGuardianInvitationsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GuardianInvitation request;
    public ClassroomUserProfilesGuardianInvitationsPatchRequest withRequest(openapisdk.models.shared.GuardianInvitation request) {
        this.request = request;
        return this;
    }
    public ClassroomUserProfilesGuardianInvitationsPatchSecurity security;
    public ClassroomUserProfilesGuardianInvitationsPatchRequest withSecurity(ClassroomUserProfilesGuardianInvitationsPatchSecurity security) {
        this.security = security;
        return this;
    }
}