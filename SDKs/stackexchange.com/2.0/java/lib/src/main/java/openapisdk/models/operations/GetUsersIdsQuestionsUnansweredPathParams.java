package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdsQuestionsUnansweredPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetUsersIdsQuestionsUnansweredPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}