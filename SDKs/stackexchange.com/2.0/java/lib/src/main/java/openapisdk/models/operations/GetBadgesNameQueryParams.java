package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBadgesNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetBadgesNameQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetBadgesNameQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public Long fromdate;
    public GetBadgesNameQueryParams withFromdate(Long fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inname")
    public String inname;
    public GetBadgesNameQueryParams withInname(String inname) {
        this.inname = inname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public String max;
    public GetBadgesNameQueryParams withMax(String max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min")
    public String min;
    public GetBadgesNameQueryParams withMin(String min) {
        this.min = min;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetBadgesNameOrderEnum order;
    public GetBadgesNameQueryParams withOrder(GetBadgesNameOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetBadgesNameQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetBadgesNameQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetBadgesNameQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetBadgesNameSortEnum sort;
    public GetBadgesNameQueryParams withSort(GetBadgesNameSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public Long todate;
    public GetBadgesNameQueryParams withTodate(Long todate) {
        this.todate = todate;
        return this;
    }
}