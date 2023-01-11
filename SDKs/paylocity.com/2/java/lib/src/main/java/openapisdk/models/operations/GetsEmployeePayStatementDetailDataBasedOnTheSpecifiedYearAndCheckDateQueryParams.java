package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dettypes")
    public String dettypes;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams withDettypes(String dettypes) {
        this.dettypes = dettypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includetotalcount")
    public Boolean includetotalcount;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams withIncludetotalcount(Boolean includetotalcount) {
        this.includetotalcount = includetotalcount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagenumber")
    public Long pagenumber;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams withPagenumber(Long pagenumber) {
        this.pagenumber = pagenumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
}