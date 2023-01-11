package openapisdk.models.operations;



public class YoutubeMembershipsLevelsListRequest {
    public YoutubeMembershipsLevelsListQueryParams queryParams;
    public YoutubeMembershipsLevelsListRequest withQueryParams(YoutubeMembershipsLevelsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeMembershipsLevelsListSecurity security;
    public YoutubeMembershipsLevelsListRequest withSecurity(YoutubeMembershipsLevelsListSecurity security) {
        this.security = security;
        return this;
    }
}