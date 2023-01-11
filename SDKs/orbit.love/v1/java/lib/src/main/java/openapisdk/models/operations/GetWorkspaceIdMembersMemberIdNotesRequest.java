package openapisdk.models.operations;



public class GetWorkspaceIdMembersMemberIdNotesRequest {
    public GetWorkspaceIdMembersMemberIdNotesPathParams pathParams;
    public GetWorkspaceIdMembersMemberIdNotesRequest withPathParams(GetWorkspaceIdMembersMemberIdNotesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspaceIdMembersMemberIdNotesQueryParams queryParams;
    public GetWorkspaceIdMembersMemberIdNotesRequest withQueryParams(GetWorkspaceIdMembersMemberIdNotesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkspaceIdMembersMemberIdNotesSecurity security;
    public GetWorkspaceIdMembersMemberIdNotesRequest withSecurity(GetWorkspaceIdMembersMemberIdNotesSecurity security) {
        this.security = security;
        return this;
    }
}