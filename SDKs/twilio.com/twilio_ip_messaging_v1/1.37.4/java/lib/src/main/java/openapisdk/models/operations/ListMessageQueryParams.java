package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.MessageEnumOrderTypeEnum order;
    public ListMessageQueryParams withOrder(openapisdk.models.shared.MessageEnumOrderTypeEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMessageQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}