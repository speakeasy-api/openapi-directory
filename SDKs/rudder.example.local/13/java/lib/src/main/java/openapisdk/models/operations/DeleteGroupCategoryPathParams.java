package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupCategoryId")
    public String groupCategoryId;
    public DeleteGroupCategoryPathParams withGroupCategoryId(String groupCategoryId) {
        this.groupCategoryId = groupCategoryId;
        return this;
    }
}