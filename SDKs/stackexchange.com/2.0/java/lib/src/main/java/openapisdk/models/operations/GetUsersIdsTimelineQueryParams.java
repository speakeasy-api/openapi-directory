package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdsTimelineQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetUsersIdsTimelineQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetUsersIdsTimelineQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public Long fromdate;
    public GetUsersIdsTimelineQueryParams withFromdate(Long fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetUsersIdsTimelineQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetUsersIdsTimelineQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetUsersIdsTimelineQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public Long todate;
    public GetUsersIdsTimelineQueryParams withTodate(Long todate) {
        this.todate = todate;
        return this;
    }
}