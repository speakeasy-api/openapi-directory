package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public CreateSubAccountPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}