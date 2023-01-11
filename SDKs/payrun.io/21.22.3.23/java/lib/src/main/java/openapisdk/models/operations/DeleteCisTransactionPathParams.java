package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCisTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisTransactionId")
    public String cisTransactionId;
    public DeleteCisTransactionPathParams withCisTransactionId(String cisTransactionId) {
        this.cisTransactionId = cisTransactionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteCisTransactionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}