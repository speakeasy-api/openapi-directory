package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrunkingCountryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTrunkingCountryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}