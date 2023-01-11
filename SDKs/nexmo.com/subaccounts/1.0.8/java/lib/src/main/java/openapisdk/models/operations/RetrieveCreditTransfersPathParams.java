package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveCreditTransfersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public RetrieveCreditTransfersPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}