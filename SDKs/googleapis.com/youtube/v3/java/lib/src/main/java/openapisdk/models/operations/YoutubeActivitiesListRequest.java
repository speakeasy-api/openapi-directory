package openapisdk.models.operations;



public class YoutubeActivitiesListRequest {
    public YoutubeActivitiesListQueryParams queryParams;
    public YoutubeActivitiesListRequest withQueryParams(YoutubeActivitiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeActivitiesListSecurity security;
    public YoutubeActivitiesListRequest withSecurity(YoutubeActivitiesListSecurity security) {
        this.security = security;
        return this;
    }
}