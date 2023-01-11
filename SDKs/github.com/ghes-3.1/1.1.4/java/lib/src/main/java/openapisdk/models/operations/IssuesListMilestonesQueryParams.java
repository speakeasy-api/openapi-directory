package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListMilestonesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.RepoEnum4 direction;
    public IssuesListMilestonesQueryParams withDirection(openapisdk.models.shared.RepoEnum4 direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public IssuesListMilestonesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public IssuesListMilestonesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.RepoEnum3 sort;
    public IssuesListMilestonesQueryParams withSort(openapisdk.models.shared.RepoEnum3 sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.RepoEnum2 state;
    public IssuesListMilestonesQueryParams withState(openapisdk.models.shared.RepoEnum2 state) {
        this.state = state;
        return this;
    }
}