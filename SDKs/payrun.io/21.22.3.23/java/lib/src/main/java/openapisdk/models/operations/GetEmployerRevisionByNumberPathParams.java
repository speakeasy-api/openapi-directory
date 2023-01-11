package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployerRevisionByNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetEmployerRevisionByNumberPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RevisionNumber")
    public String revisionNumber;
    public GetEmployerRevisionByNumberPathParams withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
}