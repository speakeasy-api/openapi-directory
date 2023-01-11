package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisconnectCarrierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_id")
    public String carrierId;
    public DisconnectCarrierPathParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_name")
    public openapisdk.models.shared.CarrierNameEnum carrierName;
    public DisconnectCarrierPathParams withCarrierName(openapisdk.models.shared.CarrierNameEnum carrierName) {
        this.carrierName = carrierName;
        return this;
    }
}