package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsTweetCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public Long endDate;
    public GetReportsTweetCreateQueryParams withEndDate(Long endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetReportsTweetCreateQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_name")
    public String reportName;
    public GetReportsTweetCreateQueryParams withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public Long startDate;
    public GetReportsTweetCreateQueryParams withStartDate(Long startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=terms")
    public String terms;
    public GetReportsTweetCreateQueryParams withTerms(String terms) {
        this.terms = terms;
        return this;
    }
}