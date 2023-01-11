package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeeByIdV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payeeId")
    public String payeeId;
    public GetPayeeByIdV4PathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}