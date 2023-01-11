package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAchFundingRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sourceAccountId")
    public String sourceAccountId;
    public CreateAchFundingRequestPathParams withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
}