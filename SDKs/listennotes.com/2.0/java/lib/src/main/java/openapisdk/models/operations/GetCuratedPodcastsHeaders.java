package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCuratedPodcastsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public GetCuratedPodcastsHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}