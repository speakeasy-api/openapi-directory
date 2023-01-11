package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListsNamesFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-key")
    public String apiKey;
    public GetListsNamesFormatQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}