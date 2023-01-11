package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteThirdPartyTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteThirdPartyTransactionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ThirdPartyTransactionId")
    public String thirdPartyTransactionId;
    public DeleteThirdPartyTransactionPathParams withThirdPartyTransactionId(String thirdPartyTransactionId) {
        this.thirdPartyTransactionId = thirdPartyTransactionId;
        return this;
    }
}