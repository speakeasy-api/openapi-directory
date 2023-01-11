package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutThirdPartyTransactionTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutThirdPartyTransactionTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public PutThirdPartyTransactionTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ThirdPartyTransactionId")
    public String thirdPartyTransactionId;
    public PutThirdPartyTransactionTagPathParams withThirdPartyTransactionId(String thirdPartyTransactionId) {
        this.thirdPartyTransactionId = thirdPartyTransactionId;
        return this;
    }
}