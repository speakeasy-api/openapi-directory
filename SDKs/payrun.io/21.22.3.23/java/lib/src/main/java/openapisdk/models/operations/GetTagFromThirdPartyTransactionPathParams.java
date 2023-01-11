package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagFromThirdPartyTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagFromThirdPartyTransactionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetTagFromThirdPartyTransactionPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ThirdPartyTransactionId")
    public String thirdPartyTransactionId;
    public GetTagFromThirdPartyTransactionPathParams withThirdPartyTransactionId(String thirdPartyTransactionId) {
        this.thirdPartyTransactionId = thirdPartyTransactionId;
        return this;
    }
}