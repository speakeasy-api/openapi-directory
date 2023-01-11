package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomUserProfilesGuardianInvitationsCreateRequest {
    public ClassroomUserProfilesGuardianInvitationsCreatePathParams pathParams;
    public ClassroomUserProfilesGuardianInvitationsCreateRequest withPathParams(ClassroomUserProfilesGuardianInvitationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomUserProfilesGuardianInvitationsCreateQueryParams queryParams;
    public ClassroomUserProfilesGuardianInvitationsCreateRequest withQueryParams(ClassroomUserProfilesGuardianInvitationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GuardianInvitation request;
    public ClassroomUserProfilesGuardianInvitationsCreateRequest withRequest(openapisdk.models.shared.GuardianInvitation request) {
        this.request = request;
        return this;
    }
    public ClassroomUserProfilesGuardianInvitationsCreateSecurity security;
    public ClassroomUserProfilesGuardianInvitationsCreateRequest withSecurity(ClassroomUserProfilesGuardianInvitationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}