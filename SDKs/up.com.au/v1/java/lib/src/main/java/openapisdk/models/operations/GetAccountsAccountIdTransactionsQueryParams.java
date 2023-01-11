package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdTransactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[category]")
    public String filterCategory;
    public GetAccountsAccountIdTransactionsQueryParams withFilterCategory(String filterCategory) {
        this.filterCategory = filterCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[since]")
    public OffsetDateTime filterSince;
    public GetAccountsAccountIdTransactionsQueryParams withFilterSince(OffsetDateTime filterSince) {
        this.filterSince = filterSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[status]")
    public Object filterStatus;
    public GetAccountsAccountIdTransactionsQueryParams withFilterStatus(Object filterStatus) {
        this.filterStatus = filterStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[tag]")
    public String filterTag;
    public GetAccountsAccountIdTransactionsQueryParams withFilterTag(String filterTag) {
        this.filterTag = filterTag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[until]")
    public OffsetDateTime filterUntil;
    public GetAccountsAccountIdTransactionsQueryParams withFilterUntil(OffsetDateTime filterUntil) {
        this.filterUntil = filterUntil;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetAccountsAccountIdTransactionsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}