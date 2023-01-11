package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentRepliesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetCommentRepliesQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetCommentRepliesQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}