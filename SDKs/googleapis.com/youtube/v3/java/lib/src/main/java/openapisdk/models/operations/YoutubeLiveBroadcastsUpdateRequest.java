package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveBroadcastsUpdateRequest {
    public YoutubeLiveBroadcastsUpdateQueryParams queryParams;
    public YoutubeLiveBroadcastsUpdateRequest withQueryParams(YoutubeLiveBroadcastsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiveBroadcast request;
    public YoutubeLiveBroadcastsUpdateRequest withRequest(openapisdk.models.shared.LiveBroadcast request) {
        this.request = request;
        return this;
    }
    public YoutubeLiveBroadcastsUpdateSecurity security;
    public YoutubeLiveBroadcastsUpdateRequest withSecurity(YoutubeLiveBroadcastsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}