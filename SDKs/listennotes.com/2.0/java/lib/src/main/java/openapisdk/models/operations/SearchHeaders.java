package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public SearchHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}