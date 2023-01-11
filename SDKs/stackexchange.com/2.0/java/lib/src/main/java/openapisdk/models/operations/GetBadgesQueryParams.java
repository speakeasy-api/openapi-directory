package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBadgesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetBadgesQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetBadgesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public Long fromdate;
    public GetBadgesQueryParams withFromdate(Long fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inname")
    public String inname;
    public GetBadgesQueryParams withInname(String inname) {
        this.inname = inname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public String max;
    public GetBadgesQueryParams withMax(String max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min")
    public String min;
    public GetBadgesQueryParams withMin(String min) {
        this.min = min;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetBadgesOrderEnum order;
    public GetBadgesQueryParams withOrder(GetBadgesOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetBadgesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetBadgesQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetBadgesQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetBadgesSortEnum sort;
    public GetBadgesQueryParams withSort(GetBadgesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public Long todate;
    public GetBadgesQueryParams withTodate(Long todate) {
        this.todate = todate;
        return this;
    }
}