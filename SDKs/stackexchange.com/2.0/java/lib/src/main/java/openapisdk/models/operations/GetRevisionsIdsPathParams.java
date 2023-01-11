package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevisionsIdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetRevisionsIdsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}