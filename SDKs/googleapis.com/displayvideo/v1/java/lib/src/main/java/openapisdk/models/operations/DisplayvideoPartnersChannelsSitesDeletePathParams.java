package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersChannelsSitesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public DisplayvideoPartnersChannelsSitesDeletePathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersChannelsSitesDeletePathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=urlOrAppId")
    public String urlOrAppId;
    public DisplayvideoPartnersChannelsSitesDeletePathParams withUrlOrAppId(String urlOrAppId) {
        this.urlOrAppId = urlOrAppId;
        return this;
    }
}