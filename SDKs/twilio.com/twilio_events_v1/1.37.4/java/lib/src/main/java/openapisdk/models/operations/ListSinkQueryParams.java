package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSinkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InUse")
    public Boolean inUse;
    public ListSinkQueryParams withInUse(Boolean inUse) {
        this.inUse = inUse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSinkQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public String status;
    public ListSinkQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}