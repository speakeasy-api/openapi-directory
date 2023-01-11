package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdsQuestionsFeaturedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetUsersIdsQuestionsFeaturedPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}