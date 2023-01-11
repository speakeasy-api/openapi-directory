package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorAddPayorLogoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;
    public PayorAddPayorLogoPathParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}