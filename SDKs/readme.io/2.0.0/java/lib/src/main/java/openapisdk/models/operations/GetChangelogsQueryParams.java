package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChangelogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetChangelogsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetChangelogsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}