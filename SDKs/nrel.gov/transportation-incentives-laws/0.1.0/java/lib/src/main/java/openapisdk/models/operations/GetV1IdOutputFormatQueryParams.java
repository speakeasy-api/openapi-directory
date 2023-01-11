package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1IdOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetV1IdOutputFormatQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expired")
    public Boolean expired;
    public GetV1IdOutputFormatQueryParams withExpired(Boolean expired) {
        this.expired = expired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=poc")
    public Boolean poc;
    public GetV1IdOutputFormatQueryParams withPoc(Boolean poc) {
        this.poc = poc;
        return this;
    }
}