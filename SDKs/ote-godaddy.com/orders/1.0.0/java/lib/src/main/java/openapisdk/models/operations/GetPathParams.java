package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public GetPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}