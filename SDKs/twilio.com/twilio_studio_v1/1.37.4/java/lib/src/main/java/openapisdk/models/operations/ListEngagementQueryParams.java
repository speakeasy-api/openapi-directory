package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEngagementQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListEngagementQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}