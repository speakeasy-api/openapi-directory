package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMarketplaceInstalledAddOnQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMarketplaceInstalledAddOnQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}