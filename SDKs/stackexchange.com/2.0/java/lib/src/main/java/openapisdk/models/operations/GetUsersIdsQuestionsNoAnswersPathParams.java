package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdsQuestionsNoAnswersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetUsersIdsQuestionsNoAnswersPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}