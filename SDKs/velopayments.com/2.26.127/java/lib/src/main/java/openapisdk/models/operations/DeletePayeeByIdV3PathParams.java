package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePayeeByIdV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payeeId")
    public String payeeId;
    public DeletePayeeByIdV3PathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}