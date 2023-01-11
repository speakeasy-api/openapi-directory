package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRuleCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleCategoryId")
    public String ruleCategoryId;
    public UpdateRuleCategoryPathParams withRuleCategoryId(String ruleCategoryId) {
        this.ruleCategoryId = ruleCategoryId;
        return this;
    }
}