package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSimilarQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetSimilarQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetSimilarQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public Long fromdate;
    public GetSimilarQueryParams withFromdate(Long fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public String max;
    public GetSimilarQueryParams withMax(String max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min")
    public String min;
    public GetSimilarQueryParams withMin(String min) {
        this.min = min;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nottagged")
    public String nottagged;
    public GetSimilarQueryParams withNottagged(String nottagged) {
        this.nottagged = nottagged;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetSimilarOrderEnum order;
    public GetSimilarQueryParams withOrder(GetSimilarOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetSimilarQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetSimilarQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetSimilarQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetSimilarSortEnum sort;
    public GetSimilarQueryParams withSort(GetSimilarSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagged")
    public String tagged;
    public GetSimilarQueryParams withTagged(String tagged) {
        this.tagged = tagged;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public GetSimilarQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public Long todate;
    public GetSimilarQueryParams withTodate(Long todate) {
        this.todate = todate;
        return this;
    }
}