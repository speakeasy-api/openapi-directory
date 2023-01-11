package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayorByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;
    public GetPayorByIdPathParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}