package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDocumentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDocumentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}