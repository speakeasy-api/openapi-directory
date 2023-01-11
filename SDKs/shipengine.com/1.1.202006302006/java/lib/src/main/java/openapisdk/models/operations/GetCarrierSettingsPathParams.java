package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCarrierSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_id")
    public String carrierId;
    public GetCarrierSettingsPathParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_name")
    public openapisdk.models.shared.CarrierNameWithSettingsEnum carrierName;
    public GetCarrierSettingsPathParams withCarrierName(openapisdk.models.shared.CarrierNameWithSettingsEnum carrierName) {
        this.carrierName = carrierName;
        return this;
    }
}