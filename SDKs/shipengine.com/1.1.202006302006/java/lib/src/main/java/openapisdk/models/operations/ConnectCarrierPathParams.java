package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectCarrierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_name")
    public openapisdk.models.shared.CarrierNameEnum carrierName;
    public ConnectCarrierPathParams withCarrierName(openapisdk.models.shared.CarrierNameEnum carrierName) {
        this.carrierName = carrierName;
        return this;
    }
}