package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllEmployeesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includetotalcount")
    public Boolean includetotalcount;
    public GetAllEmployeesQueryParams withIncludetotalcount(Boolean includetotalcount) {
        this.includetotalcount = includetotalcount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagenumber")
    public Long pagenumber;
    public GetAllEmployeesQueryParams withPagenumber(Long pagenumber) {
        this.pagenumber = pagenumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetAllEmployeesQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
}