package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV2ListMarketsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-RapidApi-Key")
    public String xRapidApiKey;
    public GetApiV2ListMarketsHeaders withXRapidApiKey(String xRapidApiKey) {
        this.xRapidApiKey = xRapidApiKey;
        return this;
    }
}