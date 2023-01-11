package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBestPodcastsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public GetBestPodcastsHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}