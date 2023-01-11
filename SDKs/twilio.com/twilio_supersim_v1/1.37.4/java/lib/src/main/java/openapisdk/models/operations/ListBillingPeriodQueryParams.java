package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBillingPeriodQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListBillingPeriodQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}