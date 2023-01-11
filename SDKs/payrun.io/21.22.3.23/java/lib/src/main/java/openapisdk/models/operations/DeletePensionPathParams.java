package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeletePensionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PensionId")
    public String pensionId;
    public DeletePensionPathParams withPensionId(String pensionId) {
        this.pensionId = pensionId;
        return this;
    }
}