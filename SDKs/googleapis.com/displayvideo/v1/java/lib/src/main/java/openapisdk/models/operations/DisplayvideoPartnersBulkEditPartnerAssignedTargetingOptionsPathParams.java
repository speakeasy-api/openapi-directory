package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}