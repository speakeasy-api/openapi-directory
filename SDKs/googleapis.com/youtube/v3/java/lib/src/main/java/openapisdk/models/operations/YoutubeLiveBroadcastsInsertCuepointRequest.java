package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveBroadcastsInsertCuepointRequest {
    public YoutubeLiveBroadcastsInsertCuepointQueryParams queryParams;
    public YoutubeLiveBroadcastsInsertCuepointRequest withQueryParams(YoutubeLiveBroadcastsInsertCuepointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Cuepoint request;
    public YoutubeLiveBroadcastsInsertCuepointRequest withRequest(openapisdk.models.shared.Cuepoint request) {
        this.request = request;
        return this;
    }
    public YoutubeLiveBroadcastsInsertCuepointSecurity security;
    public YoutubeLiveBroadcastsInsertCuepointRequest withSecurity(YoutubeLiveBroadcastsInsertCuepointSecurity security) {
        this.security = security;
        return this;
    }
}