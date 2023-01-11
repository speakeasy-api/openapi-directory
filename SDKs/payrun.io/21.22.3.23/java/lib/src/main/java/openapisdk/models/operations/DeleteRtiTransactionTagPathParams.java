package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRtiTransactionTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteRtiTransactionTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RtiTransactionId")
    public String rtiTransactionId;
    public DeleteRtiTransactionTagPathParams withRtiTransactionId(String rtiTransactionId) {
        this.rtiTransactionId = rtiTransactionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public DeleteRtiTransactionTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}