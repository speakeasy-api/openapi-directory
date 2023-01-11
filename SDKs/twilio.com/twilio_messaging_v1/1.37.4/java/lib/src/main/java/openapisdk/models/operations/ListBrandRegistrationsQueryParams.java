package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBrandRegistrationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListBrandRegistrationsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}