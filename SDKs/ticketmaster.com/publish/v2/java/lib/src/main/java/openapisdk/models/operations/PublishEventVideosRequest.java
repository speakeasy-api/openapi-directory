package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishEventVideosRequest {
    public PublishEventVideosPathParams pathParams;
    public PublishEventVideosRequest withPathParams(PublishEventVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PublishEventVideosHeaders headers;
    public PublishEventVideosRequest withHeaders(PublishEventVideosHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Video request;
    public PublishEventVideosRequest withRequest(openapisdk.models.shared.Video request) {
        this.request = request;
        return this;
    }
}