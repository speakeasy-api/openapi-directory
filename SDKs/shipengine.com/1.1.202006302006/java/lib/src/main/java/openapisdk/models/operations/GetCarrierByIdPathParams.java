package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCarrierByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_id")
    public String carrierId;
    public GetCarrierByIdPathParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
}