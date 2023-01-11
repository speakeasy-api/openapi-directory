package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVVersionReportsStartDateToEndDateReportTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetVVersionReportsStartDateToEndDateReportTypeQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetVVersionReportsStartDateToEndDateReportTypeQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportSubTypeId")
    public Integer reportSubTypeId;
    public GetVVersionReportsStartDateToEndDateReportTypeQueryParams withReportSubTypeId(Integer reportSubTypeId) {
        this.reportSubTypeId = reportSubTypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sites")
    public String sites;
    public GetVVersionReportsStartDateToEndDateReportTypeQueryParams withSites(String sites) {
        this.sites = sites;
        return this;
    }
}