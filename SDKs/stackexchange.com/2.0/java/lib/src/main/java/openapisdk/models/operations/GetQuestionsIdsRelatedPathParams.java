package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuestionsIdsRelatedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetQuestionsIdsRelatedPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}