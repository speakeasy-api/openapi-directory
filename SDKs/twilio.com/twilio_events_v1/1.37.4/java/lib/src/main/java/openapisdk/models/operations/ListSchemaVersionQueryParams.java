package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSchemaVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSchemaVersionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}