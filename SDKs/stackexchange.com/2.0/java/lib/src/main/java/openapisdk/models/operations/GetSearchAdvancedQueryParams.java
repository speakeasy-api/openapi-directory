package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchAdvancedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accepted")
    public GetSearchAdvancedAcceptedEnum accepted;
    public GetSearchAdvancedQueryParams withAccepted(GetSearchAdvancedAcceptedEnum accepted) {
        this.accepted = accepted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=answers")
    public Long answers;
    public GetSearchAdvancedQueryParams withAnswers(Long answers) {
        this.answers = answers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body")
    public String body;
    public GetSearchAdvancedQueryParams withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetSearchAdvancedQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=closed")
    public GetSearchAdvancedClosedEnum closed;
    public GetSearchAdvancedQueryParams withClosed(GetSearchAdvancedClosedEnum closed) {
        this.closed = closed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetSearchAdvancedQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public Long fromdate;
    public GetSearchAdvancedQueryParams withFromdate(Long fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public String max;
    public GetSearchAdvancedQueryParams withMax(String max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=migrated")
    public GetSearchAdvancedMigratedEnum migrated;
    public GetSearchAdvancedQueryParams withMigrated(GetSearchAdvancedMigratedEnum migrated) {
        this.migrated = migrated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min")
    public String min;
    public GetSearchAdvancedQueryParams withMin(String min) {
        this.min = min;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notice")
    public GetSearchAdvancedNoticeEnum notice;
    public GetSearchAdvancedQueryParams withNotice(GetSearchAdvancedNoticeEnum notice) {
        this.notice = notice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nottagged")
    public String nottagged;
    public GetSearchAdvancedQueryParams withNottagged(String nottagged) {
        this.nottagged = nottagged;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetSearchAdvancedOrderEnum order;
    public GetSearchAdvancedQueryParams withOrder(GetSearchAdvancedOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetSearchAdvancedQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetSearchAdvancedQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetSearchAdvancedQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetSearchAdvancedQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetSearchAdvancedSortEnum sort;
    public GetSearchAdvancedQueryParams withSort(GetSearchAdvancedSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagged")
    public String tagged;
    public GetSearchAdvancedQueryParams withTagged(String tagged) {
        this.tagged = tagged;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public GetSearchAdvancedQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public Long todate;
    public GetSearchAdvancedQueryParams withTodate(Long todate) {
        this.todate = todate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GetSearchAdvancedQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user")
    public Long user;
    public GetSearchAdvancedQueryParams withUser(Long user) {
        this.user = user;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=views")
    public Long views;
    public GetSearchAdvancedQueryParams withViews(Long views) {
        this.views = views;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=wiki")
    public GetSearchAdvancedWikiEnum wiki;
    public GetSearchAdvancedQueryParams withWiki(GetSearchAdvancedWikiEnum wiki) {
        this.wiki = wiki;
        return this;
    }
}