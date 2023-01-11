package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishAttractionVideosRequest {
    public PublishAttractionVideosPathParams pathParams;
    public PublishAttractionVideosRequest withPathParams(PublishAttractionVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PublishAttractionVideosHeaders headers;
    public PublishAttractionVideosRequest withHeaders(PublishAttractionVideosHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Video request;
    public PublishAttractionVideosRequest withRequest(openapisdk.models.shared.Video request) {
        this.request = request;
        return this;
    }
}