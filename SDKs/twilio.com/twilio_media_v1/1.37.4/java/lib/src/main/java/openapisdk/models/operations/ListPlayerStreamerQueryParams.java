package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPlayerStreamerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.PlayerStreamerEnumOrderEnum order;
    public ListPlayerStreamerQueryParams withOrder(openapisdk.models.shared.PlayerStreamerEnumOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListPlayerStreamerQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.PlayerStreamerEnumStatusEnum status;
    public ListPlayerStreamerQueryParams withStatus(openapisdk.models.shared.PlayerStreamerEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}