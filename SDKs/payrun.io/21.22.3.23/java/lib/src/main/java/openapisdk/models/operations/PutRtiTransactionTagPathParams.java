package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRtiTransactionTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutRtiTransactionTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RtiTransactionId")
    public String rtiTransactionId;
    public PutRtiTransactionTagPathParams withRtiTransactionId(String rtiTransactionId) {
        this.rtiTransactionId = rtiTransactionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public PutRtiTransactionTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}