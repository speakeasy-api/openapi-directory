package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV2PredictionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-RapidApi-Key")
    public String xRapidApiKey;
    public GetApiV2PredictionsHeaders withXRapidApiKey(String xRapidApiKey) {
        this.xRapidApiKey = xRapidApiKey;
        return this;
    }
}