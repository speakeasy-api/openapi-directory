package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCarrierServicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_id")
    public String carrierId;
    public ListCarrierServicesPathParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
}