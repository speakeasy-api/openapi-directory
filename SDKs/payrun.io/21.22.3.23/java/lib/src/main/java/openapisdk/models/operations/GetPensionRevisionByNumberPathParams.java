package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPensionRevisionByNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPensionRevisionByNumberPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PensionId")
    public String pensionId;
    public GetPensionRevisionByNumberPathParams withPensionId(String pensionId) {
        this.pensionId = pensionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RevisionNumber")
    public String revisionNumber;
    public GetPensionRevisionByNumberPathParams withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
}