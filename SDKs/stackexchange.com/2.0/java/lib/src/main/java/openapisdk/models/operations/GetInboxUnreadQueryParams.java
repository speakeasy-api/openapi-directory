package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInboxUnreadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetInboxUnreadQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetInboxUnreadQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetInboxUnreadQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetInboxUnreadQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public Long since;
    public GetInboxUnreadQueryParams withSince(Long since) {
        this.since = since;
        return this;
    }
}