package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=report_number")
    public String reportNumber;
    public ReportsReadPathParams withReportNumber(String reportNumber) {
        this.reportNumber = reportNumber;
        return this;
    }
}