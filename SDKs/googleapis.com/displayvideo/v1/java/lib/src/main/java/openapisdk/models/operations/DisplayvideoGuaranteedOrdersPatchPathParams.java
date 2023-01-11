package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoGuaranteedOrdersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=guaranteedOrderId")
    public String guaranteedOrderId;
    public DisplayvideoGuaranteedOrdersPatchPathParams withGuaranteedOrderId(String guaranteedOrderId) {
        this.guaranteedOrderId = guaranteedOrderId;
        return this;
    }
}