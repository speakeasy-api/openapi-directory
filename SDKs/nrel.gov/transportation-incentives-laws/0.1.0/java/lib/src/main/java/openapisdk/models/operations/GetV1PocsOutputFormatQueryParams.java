package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1PocsOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetV1PocsOutputFormatQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jurisdiction")
    public String jurisdiction;
    public GetV1PocsOutputFormatQueryParams withJurisdiction(String jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
}