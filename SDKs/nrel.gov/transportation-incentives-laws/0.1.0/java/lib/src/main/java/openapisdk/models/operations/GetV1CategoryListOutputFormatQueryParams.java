package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1CategoryListOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetV1CategoryListOutputFormatQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetV1CategoryListOutputFormatTypeEnum type;
    public GetV1CategoryListOutputFormatQueryParams withType(GetV1CategoryListOutputFormatTypeEnum type) {
        this.type = type;
        return this;
    }
}