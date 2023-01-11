package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorEmailOptOutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;
    public PayorEmailOptOutPathParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}