package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordingAddOnResultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRecordingAddOnResultQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}