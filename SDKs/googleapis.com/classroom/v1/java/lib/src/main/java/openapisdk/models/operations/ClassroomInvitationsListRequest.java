package openapisdk.models.operations;



public class ClassroomInvitationsListRequest {
    public ClassroomInvitationsListQueryParams queryParams;
    public ClassroomInvitationsListRequest withQueryParams(ClassroomInvitationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassroomInvitationsListSecurity security;
    public ClassroomInvitationsListRequest withSecurity(ClassroomInvitationsListSecurity security) {
        this.security = security;
        return this;
    }
}