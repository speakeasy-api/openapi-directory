package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMediaProcessorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.MediaProcessorEnumOrderEnum order;
    public ListMediaProcessorQueryParams withOrder(openapisdk.models.shared.MediaProcessorEnumOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMediaProcessorQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.MediaProcessorEnumStatusEnum status;
    public ListMediaProcessorQueryParams withStatus(openapisdk.models.shared.MediaProcessorEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}