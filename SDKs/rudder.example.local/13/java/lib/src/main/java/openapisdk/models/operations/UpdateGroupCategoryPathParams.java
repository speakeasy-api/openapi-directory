package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupCategoryId")
    public String groupCategoryId;
    public UpdateGroupCategoryPathParams withGroupCategoryId(String groupCategoryId) {
        this.groupCategoryId = groupCategoryId;
        return this;
    }
}