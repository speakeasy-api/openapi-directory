package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspaceIdMembersMemberIdNotesRequest {
    public PostWorkspaceIdMembersMemberIdNotesPathParams pathParams;
    public PostWorkspaceIdMembersMemberIdNotesRequest withPathParams(PostWorkspaceIdMembersMemberIdNotesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Note request;
    public PostWorkspaceIdMembersMemberIdNotesRequest withRequest(openapisdk.models.shared.Note request) {
        this.request = request;
        return this;
    }
    public PostWorkspaceIdMembersMemberIdNotesSecurity security;
    public PostWorkspaceIdMembersMemberIdNotesRequest withSecurity(PostWorkspaceIdMembersMemberIdNotesSecurity security) {
        this.security = security;
        return this;
    }
}