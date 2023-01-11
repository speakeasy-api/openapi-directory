package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPodcastByIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public GetPodcastByIdHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}