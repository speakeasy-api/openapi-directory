package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTrackingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carrier_code")
    public String carrierCode;
    public StartTrackingQueryParams withCarrierCode(String carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tracking_number")
    public String trackingNumber;
    public StartTrackingQueryParams withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}