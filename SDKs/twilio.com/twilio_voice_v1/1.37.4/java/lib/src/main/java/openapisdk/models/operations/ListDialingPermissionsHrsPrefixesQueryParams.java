package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDialingPermissionsHrsPrefixesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDialingPermissionsHrsPrefixesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}