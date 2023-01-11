package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveBlockChildrenQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public RetrieveBlockChildrenQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}