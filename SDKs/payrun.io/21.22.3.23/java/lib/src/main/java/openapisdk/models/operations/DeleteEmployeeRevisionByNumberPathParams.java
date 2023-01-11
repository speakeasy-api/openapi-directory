package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEmployeeRevisionByNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public DeleteEmployeeRevisionByNumberPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteEmployeeRevisionByNumberPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RevisionNumber")
    public String revisionNumber;
    public DeleteEmployeeRevisionByNumberPathParams withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
}