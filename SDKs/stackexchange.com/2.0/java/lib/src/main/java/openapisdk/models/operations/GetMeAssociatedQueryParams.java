package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeAssociatedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetMeAssociatedQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetMeAssociatedQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetMeAssociatedQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetMeAssociatedQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
}