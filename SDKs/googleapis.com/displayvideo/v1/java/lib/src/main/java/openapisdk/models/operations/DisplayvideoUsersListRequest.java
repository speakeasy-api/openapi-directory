package openapisdk.models.operations;



public class DisplayvideoUsersListRequest {
    public DisplayvideoUsersListQueryParams queryParams;
    public DisplayvideoUsersListRequest withQueryParams(DisplayvideoUsersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DisplayvideoUsersListSecurity security;
    public DisplayvideoUsersListRequest withSecurity(DisplayvideoUsersListSecurity security) {
        this.security = security;
        return this;
    }
}