package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetOrdersQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetOrdersQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderStatus")
    public GetOrdersOrderStatusEnum orderStatus;
    public GetOrdersQueryParams withOrderStatus(GetOrdersOrderStatusEnum orderStatus) {
        this.orderStatus = orderStatus;
        return this;
    }
}