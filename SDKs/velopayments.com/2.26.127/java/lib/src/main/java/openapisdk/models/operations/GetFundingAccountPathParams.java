package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFundingAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fundingAccountId")
    public String fundingAccountId;
    public GetFundingAccountPathParams withFundingAccountId(String fundingAccountId) {
        this.fundingAccountId = fundingAccountId;
        return this;
    }
}