package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuestionsIdsCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetQuestionsIdsCommentsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}