package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveStreamsInsertRequest {
    public YoutubeLiveStreamsInsertQueryParams queryParams;
    public YoutubeLiveStreamsInsertRequest withQueryParams(YoutubeLiveStreamsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiveStream request;
    public YoutubeLiveStreamsInsertRequest withRequest(openapisdk.models.shared.LiveStream request) {
        this.request = request;
        return this;
    }
    public YoutubeLiveStreamsInsertSecurity security;
    public YoutubeLiveStreamsInsertRequest withSecurity(YoutubeLiveStreamsInsertSecurity security) {
        this.security = security;
        return this;
    }
}