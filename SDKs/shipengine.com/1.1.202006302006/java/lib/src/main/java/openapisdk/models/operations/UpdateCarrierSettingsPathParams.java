package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCarrierSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_id")
    public String carrierId;
    public UpdateCarrierSettingsPathParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_name")
    public openapisdk.models.shared.CarrierNameWithSettingsEnum carrierName;
    public UpdateCarrierSettingsPathParams withCarrierName(openapisdk.models.shared.CarrierNameWithSettingsEnum carrierName) {
        this.carrierName = carrierName;
        return this;
    }
}