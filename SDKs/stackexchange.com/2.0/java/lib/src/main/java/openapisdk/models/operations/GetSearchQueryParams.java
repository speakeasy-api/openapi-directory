package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetSearchQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetSearchQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public Long fromdate;
    public GetSearchQueryParams withFromdate(Long fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=intitle")
    public String intitle;
    public GetSearchQueryParams withIntitle(String intitle) {
        this.intitle = intitle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public String max;
    public GetSearchQueryParams withMax(String max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min")
    public String min;
    public GetSearchQueryParams withMin(String min) {
        this.min = min;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nottagged")
    public String nottagged;
    public GetSearchQueryParams withNottagged(String nottagged) {
        this.nottagged = nottagged;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetSearchOrderEnum order;
    public GetSearchQueryParams withOrder(GetSearchOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetSearchQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetSearchQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetSearchQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetSearchSortEnum sort;
    public GetSearchQueryParams withSort(GetSearchSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagged")
    public String tagged;
    public GetSearchQueryParams withTagged(String tagged) {
        this.tagged = tagged;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public Long todate;
    public GetSearchQueryParams withTodate(Long todate) {
        this.todate = todate;
        return this;
    }
}