package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiMiscRandomAddressHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public GetApiMiscRandomAddressHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}