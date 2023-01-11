package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveStreamsUpdateRequest {
    public YoutubeLiveStreamsUpdateQueryParams queryParams;
    public YoutubeLiveStreamsUpdateRequest withQueryParams(YoutubeLiveStreamsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiveStream request;
    public YoutubeLiveStreamsUpdateRequest withRequest(openapisdk.models.shared.LiveStream request) {
        this.request = request;
        return this;
    }
    public YoutubeLiveStreamsUpdateSecurity security;
    public YoutubeLiveStreamsUpdateRequest withSecurity(YoutubeLiveStreamsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}