package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBatchErrorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListBatchErrorsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Integer pagesize;
    public ListBatchErrorsQueryParams withPagesize(Integer pagesize) {
        this.pagesize = pagesize;
        return this;
    }
}