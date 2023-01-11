package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessTokensAccessTokensQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetAccessTokensAccessTokensQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetAccessTokensAccessTokensQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetAccessTokensAccessTokensQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetAccessTokensAccessTokensQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
}