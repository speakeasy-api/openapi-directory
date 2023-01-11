package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuestionsIdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetQuestionsIdsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}