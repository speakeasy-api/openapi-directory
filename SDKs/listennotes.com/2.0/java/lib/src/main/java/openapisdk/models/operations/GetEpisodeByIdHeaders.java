package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodeByIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public GetEpisodeByIdHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}