package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePensionRevisionByNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeletePensionRevisionByNumberPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PensionId")
    public String pensionId;
    public DeletePensionRevisionByNumberPathParams withPensionId(String pensionId) {
        this.pensionId = pensionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RevisionNumber")
    public String revisionNumber;
    public DeletePensionRevisionByNumberPathParams withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
}