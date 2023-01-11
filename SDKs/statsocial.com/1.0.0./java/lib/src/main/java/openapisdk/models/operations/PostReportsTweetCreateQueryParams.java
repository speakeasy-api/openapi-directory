package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportsTweetCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public Long endDate;
    public PostReportsTweetCreateQueryParams withEndDate(Long endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public PostReportsTweetCreateQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_name")
    public String reportName;
    public PostReportsTweetCreateQueryParams withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public Long startDate;
    public PostReportsTweetCreateQueryParams withStartDate(Long startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=terms")
    public String terms;
    public PostReportsTweetCreateQueryParams withTerms(String terms) {
        this.terms = terms;
        return this;
    }
}