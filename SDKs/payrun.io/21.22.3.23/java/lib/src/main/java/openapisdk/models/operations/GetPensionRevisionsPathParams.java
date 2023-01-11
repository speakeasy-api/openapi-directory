package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPensionRevisionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPensionRevisionsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PensionId")
    public String pensionId;
    public GetPensionRevisionsPathParams withPensionId(String pensionId) {
        this.pensionId = pensionId;
        return this;
    }
}