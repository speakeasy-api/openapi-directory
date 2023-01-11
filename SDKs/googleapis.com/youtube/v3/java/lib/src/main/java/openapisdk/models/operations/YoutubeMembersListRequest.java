package openapisdk.models.operations;



public class YoutubeMembersListRequest {
    public YoutubeMembersListQueryParams queryParams;
    public YoutubeMembersListRequest withQueryParams(YoutubeMembersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeMembersListSecurity security;
    public YoutubeMembersListRequest withSecurity(YoutubeMembersListSecurity security) {
        this.security = security;
        return this;
    }
}