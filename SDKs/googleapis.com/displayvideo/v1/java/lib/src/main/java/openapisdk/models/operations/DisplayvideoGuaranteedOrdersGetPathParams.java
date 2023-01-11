package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoGuaranteedOrdersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=guaranteedOrderId")
    public String guaranteedOrderId;
    public DisplayvideoGuaranteedOrdersGetPathParams withGuaranteedOrderId(String guaranteedOrderId) {
        this.guaranteedOrderId = guaranteedOrderId;
        return this;
    }
}