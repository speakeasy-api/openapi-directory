package openapisdk.models.operations;



public class YoutubeWatermarksUnsetRequest {
    public YoutubeWatermarksUnsetQueryParams queryParams;
    public YoutubeWatermarksUnsetRequest withQueryParams(YoutubeWatermarksUnsetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeWatermarksUnsetSecurity security;
    public YoutubeWatermarksUnsetRequest withSecurity(YoutubeWatermarksUnsetSecurity security) {
        this.security = security;
        return this;
    }
}