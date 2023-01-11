package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllThirdPartyTransactionsWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllThirdPartyTransactionsWithTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetAllThirdPartyTransactionsWithTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}