package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=base")
    public String base;
    public PullsListQueryParams withBase(String base) {
        this.base = base;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.RepoEnum4 direction;
    public PullsListQueryParams withDirection(openapisdk.models.shared.RepoEnum4 direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=head")
    public String head;
    public PullsListQueryParams withHead(String head) {
        this.head = head;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PullsListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public PullsListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.RepoEnum5 sort;
    public PullsListQueryParams withSort(openapisdk.models.shared.RepoEnum5 sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.RepoEnum2 state;
    public PullsListQueryParams withState(openapisdk.models.shared.RepoEnum2 state) {
        this.state = state;
        return this;
    }
}