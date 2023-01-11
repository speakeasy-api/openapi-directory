package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPodcastsInBatchRequest {
    public GetPodcastsInBatchHeaders headers;
    public GetPodcastsInBatchRequest withHeaders(GetPodcastsInBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.GetPodcastsInBatchForm request;
    public GetPodcastsInBatchRequest withRequest(openapisdk.models.shared.GetPodcastsInBatchForm request) {
        this.request = request;
        return this;
    }
}