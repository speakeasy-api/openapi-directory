package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayorByIdV2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;
    public GetPayorByIdV2PathParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}