package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeWritePermissionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetMeWritePermissionsQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetMeWritePermissionsQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetMeWritePermissionsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetMeWritePermissionsQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetMeWritePermissionsQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
}