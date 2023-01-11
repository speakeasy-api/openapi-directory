package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEmployerRevisionByNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteEmployerRevisionByNumberPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RevisionNumber")
    public String revisionNumber;
    public DeleteEmployerRevisionByNumberPathParams withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
}