package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dettypes")
    public String dettypes;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams withDettypes(String dettypes) {
        this.dettypes = dettypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includetotalcount")
    public Boolean includetotalcount;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams withIncludetotalcount(Boolean includetotalcount) {
        this.includetotalcount = includetotalcount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagenumber")
    public Long pagenumber;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams withPagenumber(Long pagenumber) {
        this.pagenumber = pagenumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
}