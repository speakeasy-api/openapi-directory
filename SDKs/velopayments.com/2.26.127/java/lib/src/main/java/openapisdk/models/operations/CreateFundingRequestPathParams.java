package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFundingRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sourceAccountId")
    public String sourceAccountId;
    public CreateFundingRequestPathParams withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
}