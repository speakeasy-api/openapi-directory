package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFundingAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public GetFundingAccountQueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
}