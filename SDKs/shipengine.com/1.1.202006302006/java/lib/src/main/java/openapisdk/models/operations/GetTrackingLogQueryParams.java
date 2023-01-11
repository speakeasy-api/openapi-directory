package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackingLogQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carrier_code")
    public String carrierCode;
    public GetTrackingLogQueryParams withCarrierCode(String carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tracking_number")
    public String trackingNumber;
    public GetTrackingLogQueryParams withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}