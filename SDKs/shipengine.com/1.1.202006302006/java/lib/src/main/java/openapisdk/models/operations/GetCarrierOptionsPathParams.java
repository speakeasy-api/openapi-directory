package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCarrierOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_id")
    public String carrierId;
    public GetCarrierOptionsPathParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
}