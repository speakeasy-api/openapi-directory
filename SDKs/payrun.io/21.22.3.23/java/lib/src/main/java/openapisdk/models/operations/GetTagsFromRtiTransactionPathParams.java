package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsFromRtiTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagsFromRtiTransactionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RtiTransactionId")
    public String rtiTransactionId;
    public GetTagsFromRtiTransactionPathParams withRtiTransactionId(String rtiTransactionId) {
        this.rtiTransactionId = rtiTransactionId;
        return this;
    }
}