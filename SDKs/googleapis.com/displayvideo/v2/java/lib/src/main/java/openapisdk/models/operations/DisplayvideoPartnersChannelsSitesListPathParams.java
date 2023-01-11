package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersChannelsSitesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public DisplayvideoPartnersChannelsSitesListPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersChannelsSitesListPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}