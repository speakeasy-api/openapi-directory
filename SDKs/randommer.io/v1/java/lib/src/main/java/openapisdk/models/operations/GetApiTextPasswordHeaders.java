package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiTextPasswordHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public GetApiTextPasswordHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}