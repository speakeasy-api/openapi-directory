package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiCardHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public GetApiCardHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}