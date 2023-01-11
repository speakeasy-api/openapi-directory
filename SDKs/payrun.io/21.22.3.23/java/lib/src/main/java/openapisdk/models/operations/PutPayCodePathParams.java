package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPayCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutPayCodePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayCodeId")
    public String payCodeId;
    public PutPayCodePathParams withPayCodeId(String payCodeId) {
        this.payCodeId = payCodeId;
        return this;
    }
}