package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeeByIdV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payeeId")
    public String payeeId;
    public GetPayeeByIdV3PathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}