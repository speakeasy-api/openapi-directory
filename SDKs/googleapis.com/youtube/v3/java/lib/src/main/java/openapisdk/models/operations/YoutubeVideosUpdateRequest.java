package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeVideosUpdateRequest {
    public YoutubeVideosUpdateQueryParams queryParams;
    public YoutubeVideosUpdateRequest withQueryParams(YoutubeVideosUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Video request;
    public YoutubeVideosUpdateRequest withRequest(openapisdk.models.shared.Video request) {
        this.request = request;
        return this;
    }
    public YoutubeVideosUpdateSecurity security;
    public YoutubeVideosUpdateRequest withSecurity(YoutubeVideosUpdateSecurity security) {
        this.security = security;
        return this;
    }
}