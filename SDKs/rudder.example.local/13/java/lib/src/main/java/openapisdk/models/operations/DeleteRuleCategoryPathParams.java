package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRuleCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleCategoryId")
    public String ruleCategoryId;
    public DeleteRuleCategoryPathParams withRuleCategoryId(String ruleCategoryId) {
        this.ruleCategoryId = ruleCategoryId;
        return this;
    }
}