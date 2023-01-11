package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[category]")
    public String filterCategory;
    public GetTransactionsQueryParams withFilterCategory(String filterCategory) {
        this.filterCategory = filterCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[since]")
    public OffsetDateTime filterSince;
    public GetTransactionsQueryParams withFilterSince(OffsetDateTime filterSince) {
        this.filterSince = filterSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[status]")
    public Object filterStatus;
    public GetTransactionsQueryParams withFilterStatus(Object filterStatus) {
        this.filterStatus = filterStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[tag]")
    public String filterTag;
    public GetTransactionsQueryParams withFilterTag(String filterTag) {
        this.filterTag = filterTag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[until]")
    public OffsetDateTime filterUntil;
    public GetTransactionsQueryParams withFilterUntil(OffsetDateTime filterUntil) {
        this.filterUntil = filterUntil;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetTransactionsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}