package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuestionsIdsTimelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetQuestionsIdsTimelinePathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}