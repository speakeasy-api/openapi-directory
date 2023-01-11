package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsListCommitsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PullsListCommitsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public PullsListCommitsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}