package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPayCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PatchPayCodePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayCodeId")
    public String payCodeId;
    public PatchPayCodePathParams withPayCodeId(String payCodeId) {
        this.payCodeId = payCodeId;
        return this;
    }
}