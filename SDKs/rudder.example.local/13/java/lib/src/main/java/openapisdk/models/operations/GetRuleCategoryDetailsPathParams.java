package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRuleCategoryDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleCategoryId")
    public String ruleCategoryId;
    public GetRuleCategoryDetailsPathParams withRuleCategoryId(String ruleCategoryId) {
        this.ruleCategoryId = ruleCategoryId;
        return this;
    }
}