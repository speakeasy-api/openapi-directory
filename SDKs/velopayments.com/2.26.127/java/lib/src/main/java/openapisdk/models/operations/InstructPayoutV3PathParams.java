package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstructPayoutV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payoutId")
    public String payoutId;
    public InstructPayoutV3PathParams withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
}