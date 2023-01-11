package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersEditAssignedTargetingOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersEditAssignedTargetingOptionsPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}