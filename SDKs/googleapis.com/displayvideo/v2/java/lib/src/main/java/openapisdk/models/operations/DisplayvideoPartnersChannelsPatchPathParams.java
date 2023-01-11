package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersChannelsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public DisplayvideoPartnersChannelsPatchPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersChannelsPatchPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}