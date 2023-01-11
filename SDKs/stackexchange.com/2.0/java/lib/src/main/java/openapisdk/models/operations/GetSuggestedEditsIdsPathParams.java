package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuggestedEditsIdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetSuggestedEditsIdsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}