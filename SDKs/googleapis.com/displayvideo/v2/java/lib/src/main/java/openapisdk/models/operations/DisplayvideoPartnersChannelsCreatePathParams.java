package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersChannelsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersChannelsCreatePathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}