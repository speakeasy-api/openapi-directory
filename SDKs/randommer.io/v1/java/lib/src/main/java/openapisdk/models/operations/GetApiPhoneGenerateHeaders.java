package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiPhoneGenerateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public GetApiPhoneGenerateHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}