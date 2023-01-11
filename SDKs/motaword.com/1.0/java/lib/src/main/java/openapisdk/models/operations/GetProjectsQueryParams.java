package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public GetProjectsOrderByEnum orderBy;
    public GetProjectsQueryParams withOrderBy(GetProjectsOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_type")
    public openapisdk.models.shared.ListOrderTypeEnum orderType;
    public GetProjectsQueryParams withOrderType(openapisdk.models.shared.ListOrderTypeEnum orderType) {
        this.orderType = orderType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetProjectsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetProjectsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status[]")
    public openapisdk.models.shared.ProjectStatusEnum[] status;
    public GetProjectsQueryParams withStatus(openapisdk.models.shared.ProjectStatusEnum[] status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with_completed")
    public Boolean withCompleted;
    public GetProjectsQueryParams withWithCompleted(Boolean withCompleted) {
        this.withCompleted = withCompleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with_pending")
    public Boolean withPending;
    public GetProjectsQueryParams withWithPending(Boolean withPending) {
        this.withPending = withPending;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with_started")
    public Boolean withStarted;
    public GetProjectsQueryParams withWithStarted(Boolean withStarted) {
        this.withStarted = withStarted;
        return this;
    }
}