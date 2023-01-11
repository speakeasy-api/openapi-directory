package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-ListenAPI-Key")
    public String xListenAPIKey;
    public GetRegionsHeaders withXListenApiKey(String xListenAPIKey) {
        this.xListenAPIKey = xListenAPIKey;
        return this;
    }
}