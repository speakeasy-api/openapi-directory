package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRtiTransactionsWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetRtiTransactionsWithTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetRtiTransactionsWithTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}