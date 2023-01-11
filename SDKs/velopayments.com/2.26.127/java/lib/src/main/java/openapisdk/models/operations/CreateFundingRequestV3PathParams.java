package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFundingRequestV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sourceAccountId")
    public String sourceAccountId;
    public CreateFundingRequestV3PathParams withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
}