package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersGetPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}