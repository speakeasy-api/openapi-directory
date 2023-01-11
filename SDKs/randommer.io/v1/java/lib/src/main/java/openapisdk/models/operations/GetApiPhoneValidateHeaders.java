package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiPhoneValidateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public GetApiPhoneValidateHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}