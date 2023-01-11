package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV2ListFederationsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-RapidApi-Key")
    public String xRapidApiKey;
    public GetApiV2ListFederationsHeaders withXRapidApiKey(String xRapidApiKey) {
        this.xRapidApiKey = xRapidApiKey;
        return this;
    }
}