package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportLineFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetReportLineFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReportLineId")
    public String reportLineId;
    public GetReportLineFromEmployerPathParams withReportLineId(String reportLineId) {
        this.reportLineId = reportLineId;
        return this;
    }
}