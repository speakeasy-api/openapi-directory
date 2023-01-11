package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayCodeFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPayCodeFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayCodeId")
    public String payCodeId;
    public GetPayCodeFromEmployerPathParams withPayCodeId(String payCodeId) {
        this.payCodeId = payCodeId;
        return this;
    }
}