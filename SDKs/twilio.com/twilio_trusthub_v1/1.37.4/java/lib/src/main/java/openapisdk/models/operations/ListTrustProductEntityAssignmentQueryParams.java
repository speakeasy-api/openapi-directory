package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrustProductEntityAssignmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTrustProductEntityAssignmentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}