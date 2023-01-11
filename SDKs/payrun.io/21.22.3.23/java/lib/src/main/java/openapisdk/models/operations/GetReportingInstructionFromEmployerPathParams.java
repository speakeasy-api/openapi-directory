package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportingInstructionFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetReportingInstructionFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReportingInstructionId")
    public String reportingInstructionId;
    public GetReportingInstructionFromEmployerPathParams withReportingInstructionId(String reportingInstructionId) {
        this.reportingInstructionId = reportingInstructionId;
        return this;
    }
}