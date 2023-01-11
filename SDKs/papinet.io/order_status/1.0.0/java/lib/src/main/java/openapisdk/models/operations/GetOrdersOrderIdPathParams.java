package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersOrderIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public GetOrdersOrderIdPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}