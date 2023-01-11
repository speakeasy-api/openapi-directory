package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomerProfileEntityAssignmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCustomerProfileEntityAssignmentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}