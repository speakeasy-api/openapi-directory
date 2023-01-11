package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostScrobbleEpisodesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostScrobbleEpisodesRequestBody[] request;
    public PostScrobbleEpisodesRequest withRequest(PostScrobbleEpisodesRequestBody[] request) {
        this.request = request;
        return this;
    }
}