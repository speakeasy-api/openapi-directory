package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiSocialNumberHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public GetApiSocialNumberHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}