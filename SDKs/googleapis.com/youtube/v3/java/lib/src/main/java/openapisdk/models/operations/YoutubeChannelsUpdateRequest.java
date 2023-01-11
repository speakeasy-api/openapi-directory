package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeChannelsUpdateRequest {
    public YoutubeChannelsUpdateQueryParams queryParams;
    public YoutubeChannelsUpdateRequest withQueryParams(YoutubeChannelsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public YoutubeChannelsUpdateRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public YoutubeChannelsUpdateSecurity security;
    public YoutubeChannelsUpdateRequest withSecurity(YoutubeChannelsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}