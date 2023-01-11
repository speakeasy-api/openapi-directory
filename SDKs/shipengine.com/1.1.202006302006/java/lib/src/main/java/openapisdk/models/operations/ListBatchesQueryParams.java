package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBatchesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListBatchesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public ListBatchesQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public openapisdk.models.shared.BatchesSortByEnum sortBy;
    public ListBatchesQueryParams withSortBy(openapisdk.models.shared.BatchesSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_dir")
    public java.util.Map<String, Object> sortDir;
    public ListBatchesQueryParams withSortDir(java.util.Map<String, Object> sortDir) {
        this.sortDir = sortDir;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.BatchStatusEnum status;
    public ListBatchesQueryParams withStatus(openapisdk.models.shared.BatchStatusEnum status) {
        this.status = status;
        return this;
    }
}