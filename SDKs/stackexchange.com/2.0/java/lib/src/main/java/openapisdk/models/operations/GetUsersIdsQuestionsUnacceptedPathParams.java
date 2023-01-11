package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdsQuestionsUnacceptedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetUsersIdsQuestionsUnacceptedPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}