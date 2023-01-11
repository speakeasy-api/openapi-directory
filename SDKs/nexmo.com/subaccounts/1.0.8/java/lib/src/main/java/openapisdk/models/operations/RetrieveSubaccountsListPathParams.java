package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveSubaccountsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public RetrieveSubaccountsListPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}