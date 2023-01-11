package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsIndexQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public ReportsIndexQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ReportsIndexQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public ReportsIndexQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportSubTypeId")
    public Integer reportSubTypeId;
    public ReportsIndexQueryParams withReportSubTypeId(Integer reportSubTypeId) {
        this.reportSubTypeId = reportSubTypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sites")
    public String sites;
    public ReportsIndexQueryParams withSites(String sites) {
        this.sites = sites;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public ReportsIndexQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}