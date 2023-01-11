package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dettypes")
    public String dettypes;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams withDettypes(String dettypes) {
        this.dettypes = dettypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includetotalcount")
    public Boolean includetotalcount;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams withIncludetotalcount(Boolean includetotalcount) {
        this.includetotalcount = includetotalcount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagenumber")
    public Long pagenumber;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams withPagenumber(Long pagenumber) {
        this.pagenumber = pagenumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
}