package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFundingAccountV2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fundingAccountId")
    public String fundingAccountId;
    public GetFundingAccountV2PathParams withFundingAccountId(String fundingAccountId) {
        this.fundingAccountId = fundingAccountId;
        return this;
    }
}