package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutNewAeAssessmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AEAssessmentId")
    public String aeAssessmentId;
    public PutNewAeAssessmentPathParams withAeAssessmentId(String aeAssessmentId) {
        this.aeAssessmentId = aeAssessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public PutNewAeAssessmentPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutNewAeAssessmentPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}