package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAeAssessmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AEAssessmentId")
    public String aeAssessmentId;
    public DeleteAeAssessmentPathParams withAeAssessmentId(String aeAssessmentId) {
        this.aeAssessmentId = aeAssessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public DeleteAeAssessmentPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteAeAssessmentPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}