package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRtiTransactionFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetRtiTransactionFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RtiTransactionId")
    public String rtiTransactionId;
    public GetRtiTransactionFromEmployerPathParams withRtiTransactionId(String rtiTransactionId) {
        this.rtiTransactionId = rtiTransactionId;
        return this;
    }
}