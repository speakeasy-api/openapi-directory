package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMarketplaceAvailableAddOnQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMarketplaceAvailableAddOnQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}