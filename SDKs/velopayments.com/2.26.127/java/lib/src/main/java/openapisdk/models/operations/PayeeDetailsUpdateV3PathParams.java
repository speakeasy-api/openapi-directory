package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayeeDetailsUpdateV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payeeId")
    public String payeeId;
    public PayeeDetailsUpdateV3PathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}