package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisTransactionsFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetCisTransactionsFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}