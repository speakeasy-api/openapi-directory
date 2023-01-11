package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFundsToCarrierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_id")
    public String carrierId;
    public AddFundsToCarrierPathParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
}