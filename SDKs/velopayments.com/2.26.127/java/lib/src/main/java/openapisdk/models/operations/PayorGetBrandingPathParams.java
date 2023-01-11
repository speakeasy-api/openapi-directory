package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorGetBrandingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;
    public PayorGetBrandingPathParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}