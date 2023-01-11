package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public OrdersHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}