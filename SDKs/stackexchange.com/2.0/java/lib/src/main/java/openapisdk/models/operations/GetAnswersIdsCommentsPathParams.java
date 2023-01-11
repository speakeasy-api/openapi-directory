package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnswersIdsCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetAnswersIdsCommentsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}