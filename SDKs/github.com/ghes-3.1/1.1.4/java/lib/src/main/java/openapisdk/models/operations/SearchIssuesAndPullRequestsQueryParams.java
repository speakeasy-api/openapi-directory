package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchIssuesAndPullRequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public openapisdk.models.shared.OrderEnum order;
    public SearchIssuesAndPullRequestsQueryParams withOrder(openapisdk.models.shared.OrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public SearchIssuesAndPullRequestsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SearchIssuesAndPullRequestsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchIssuesAndPullRequestsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchIssuesAndPullRequestsSortEnum sort;
    public SearchIssuesAndPullRequestsQueryParams withSort(SearchIssuesAndPullRequestsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}