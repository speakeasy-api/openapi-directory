package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIpRecordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListIpRecordQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}