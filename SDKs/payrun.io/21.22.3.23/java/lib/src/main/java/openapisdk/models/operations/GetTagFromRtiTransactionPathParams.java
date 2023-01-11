package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagFromRtiTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagFromRtiTransactionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RtiTransactionId")
    public String rtiTransactionId;
    public GetTagFromRtiTransactionPathParams withRtiTransactionId(String rtiTransactionId) {
        this.rtiTransactionId = rtiTransactionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetTagFromRtiTransactionPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}