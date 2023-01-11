package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPodcastsInBatchHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public GetPodcastsInBatchHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}