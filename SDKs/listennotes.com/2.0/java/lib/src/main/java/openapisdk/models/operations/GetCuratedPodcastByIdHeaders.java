package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCuratedPodcastByIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public GetCuratedPodcastByIdHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}