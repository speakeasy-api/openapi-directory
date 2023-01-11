package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomInvitationsCreateRequest {
    public ClassroomInvitationsCreateQueryParams queryParams;
    public ClassroomInvitationsCreateRequest withQueryParams(ClassroomInvitationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Invitation request;
    public ClassroomInvitationsCreateRequest withRequest(openapisdk.models.shared.Invitation request) {
        this.request = request;
        return this;
    }
    public ClassroomInvitationsCreateSecurity security;
    public ClassroomInvitationsCreateRequest withSecurity(ClassroomInvitationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}