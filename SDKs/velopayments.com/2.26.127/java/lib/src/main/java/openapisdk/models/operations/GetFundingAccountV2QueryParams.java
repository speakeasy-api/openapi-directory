package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFundingAccountV2QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public GetFundingAccountV2QueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
}