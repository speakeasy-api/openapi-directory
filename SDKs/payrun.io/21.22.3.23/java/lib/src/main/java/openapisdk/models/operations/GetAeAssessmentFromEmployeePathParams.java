package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAeAssessmentFromEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AEAssessmentId")
    public String aeAssessmentId;
    public GetAeAssessmentFromEmployeePathParams withAeAssessmentId(String aeAssessmentId) {
        this.aeAssessmentId = aeAssessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public GetAeAssessmentFromEmployeePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAeAssessmentFromEmployeePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}