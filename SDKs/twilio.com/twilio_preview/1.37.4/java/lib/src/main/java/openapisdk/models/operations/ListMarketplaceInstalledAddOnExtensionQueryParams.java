package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMarketplaceInstalledAddOnExtensionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMarketplaceInstalledAddOnExtensionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}