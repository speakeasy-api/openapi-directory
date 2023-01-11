package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteThirdPartyTransactionTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteThirdPartyTransactionTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public DeleteThirdPartyTransactionTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ThirdPartyTransactionId")
    public String thirdPartyTransactionId;
    public DeleteThirdPartyTransactionTagPathParams withThirdPartyTransactionId(String thirdPartyTransactionId) {
        this.thirdPartyTransactionId = thirdPartyTransactionId;
        return this;
    }
}