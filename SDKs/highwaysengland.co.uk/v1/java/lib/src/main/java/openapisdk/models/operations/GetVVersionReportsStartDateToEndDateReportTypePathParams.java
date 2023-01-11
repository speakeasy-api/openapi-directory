package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVVersionReportsStartDateToEndDateReportTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=end_date")
    public String endDate;
    public GetVVersionReportsStartDateToEndDateReportTypePathParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=report_type")
    public String reportType;
    public GetVVersionReportsStartDateToEndDateReportTypePathParams withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=start_date")
    public String startDate;
    public GetVVersionReportsStartDateToEndDateReportTypePathParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetVVersionReportsStartDateToEndDateReportTypePathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}