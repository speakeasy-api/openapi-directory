package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuggestionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public GetSuggestionsTypeEnum type;
    public GetSuggestionsPathParams withType(GetSuggestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}