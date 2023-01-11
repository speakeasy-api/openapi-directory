package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveBroadcastsInsertRequest {
    public YoutubeLiveBroadcastsInsertQueryParams queryParams;
    public YoutubeLiveBroadcastsInsertRequest withQueryParams(YoutubeLiveBroadcastsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiveBroadcast request;
    public YoutubeLiveBroadcastsInsertRequest withRequest(openapisdk.models.shared.LiveBroadcast request) {
        this.request = request;
        return this;
    }
    public YoutubeLiveBroadcastsInsertSecurity security;
    public YoutubeLiveBroadcastsInsertRequest withSecurity(YoutubeLiveBroadcastsInsertSecurity security) {
        this.security = security;
        return this;
    }
}