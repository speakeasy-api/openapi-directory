package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupCategoryDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupCategoryId")
    public String groupCategoryId;
    public GetGroupCategoryDetailsPathParams withGroupCategoryId(String groupCategoryId) {
        this.groupCategoryId = groupCategoryId;
        return this;
    }
}