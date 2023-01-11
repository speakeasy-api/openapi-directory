package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OrdersPathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderID")
    public String orderID;
    public OrdersPathParams withOrderId(String orderID) {
        this.orderID = orderID;
        return this;
    }
}