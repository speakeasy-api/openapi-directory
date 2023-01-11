package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitPodcastHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public SubmitPodcastHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}