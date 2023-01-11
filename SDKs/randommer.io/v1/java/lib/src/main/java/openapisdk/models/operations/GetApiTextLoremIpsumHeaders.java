package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiTextLoremIpsumHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public GetApiTextLoremIpsumHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}