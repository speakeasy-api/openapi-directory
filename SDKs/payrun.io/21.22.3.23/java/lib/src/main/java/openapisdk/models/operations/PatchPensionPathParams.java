package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PatchPensionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PensionId")
    public String pensionId;
    public PatchPensionPathParams withPensionId(String pensionId) {
        this.pensionId = pensionId;
        return this;
    }
}