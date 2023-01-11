package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWirelessRatePlanQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListWirelessRatePlanQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}