package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLanguagesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public GetLanguagesHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}