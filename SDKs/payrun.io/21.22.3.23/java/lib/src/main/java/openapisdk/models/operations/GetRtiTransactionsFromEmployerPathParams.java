package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRtiTransactionsFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetRtiTransactionsFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}