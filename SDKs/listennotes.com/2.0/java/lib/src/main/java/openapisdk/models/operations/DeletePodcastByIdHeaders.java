package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePodcastByIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public DeletePodcastByIdHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}