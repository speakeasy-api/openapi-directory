package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiMiscCulturesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public GetApiMiscCulturesHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}