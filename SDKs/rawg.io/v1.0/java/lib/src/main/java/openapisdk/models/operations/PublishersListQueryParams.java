package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishersListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PublishersListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PublishersListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}