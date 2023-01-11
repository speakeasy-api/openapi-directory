package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePayeeByIdV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payeeId")
    public String payeeId;
    public DeletePayeeByIdV4PathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}