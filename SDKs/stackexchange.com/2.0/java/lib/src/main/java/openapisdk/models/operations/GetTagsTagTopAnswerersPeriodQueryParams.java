package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsTagTopAnswerersPeriodQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetTagsTagTopAnswerersPeriodQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetTagsTagTopAnswerersPeriodQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetTagsTagTopAnswerersPeriodQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetTagsTagTopAnswerersPeriodQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetTagsTagTopAnswerersPeriodQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
}