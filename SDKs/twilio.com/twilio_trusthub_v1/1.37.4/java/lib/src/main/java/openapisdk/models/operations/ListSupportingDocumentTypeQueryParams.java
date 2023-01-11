package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSupportingDocumentTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSupportingDocumentTypeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}