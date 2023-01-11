package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListItemAssignmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListItemAssignmentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}