package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisTransactionFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisTransactionId")
    public String cisTransactionId;
    public GetCisTransactionFromEmployerPathParams withCisTransactionId(String cisTransactionId) {
        this.cisTransactionId = cisTransactionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetCisTransactionFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}