package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuestionsIdsLinkedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetQuestionsIdsLinkedPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}