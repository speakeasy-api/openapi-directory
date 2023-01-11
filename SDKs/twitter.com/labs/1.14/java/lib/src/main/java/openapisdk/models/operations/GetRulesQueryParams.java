package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public GetRulesQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}