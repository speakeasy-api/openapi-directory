package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThirdPartyTransactionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetThirdPartyTransactionsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}