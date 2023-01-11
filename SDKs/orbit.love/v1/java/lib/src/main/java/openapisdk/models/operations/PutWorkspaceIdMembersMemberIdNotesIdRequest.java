package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWorkspaceIdMembersMemberIdNotesIdRequest {
    public PutWorkspaceIdMembersMemberIdNotesIdPathParams pathParams;
    public PutWorkspaceIdMembersMemberIdNotesIdRequest withPathParams(PutWorkspaceIdMembersMemberIdNotesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Note request;
    public PutWorkspaceIdMembersMemberIdNotesIdRequest withRequest(openapisdk.models.shared.Note request) {
        this.request = request;
        return this;
    }
    public PutWorkspaceIdMembersMemberIdNotesIdSecurity security;
    public PutWorkspaceIdMembersMemberIdNotesIdRequest withSecurity(PutWorkspaceIdMembersMemberIdNotesIdSecurity security) {
        this.security = security;
        return this;
    }
}