package openapisdk.models.operations;



public class YoutubeWatermarksSetRequest {
    public YoutubeWatermarksSetQueryParams queryParams;
    public YoutubeWatermarksSetRequest withQueryParams(YoutubeWatermarksSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeWatermarksSetRequests request;
    public YoutubeWatermarksSetRequest withRequest(YoutubeWatermarksSetRequests request) {
        this.request = request;
        return this;
    }
    public YoutubeWatermarksSetSecurity security;
    public YoutubeWatermarksSetRequest withSecurity(YoutubeWatermarksSetSecurity security) {
        this.security = security;
        return this;
    }
}