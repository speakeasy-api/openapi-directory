package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitPodcastRequest {
    public SubmitPodcastHeaders headers;
    public SubmitPodcastRequest withHeaders(SubmitPodcastHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.SubmitPodcastForm request;
    public SubmitPodcastRequest withRequest(openapisdk.models.shared.SubmitPodcastForm request) {
        this.request = request;
        return this;
    }
}