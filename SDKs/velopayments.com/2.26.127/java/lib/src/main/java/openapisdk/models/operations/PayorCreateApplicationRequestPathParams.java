package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorCreateApplicationRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;
    public PayorCreateApplicationRequestPathParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}