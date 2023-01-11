package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersChannelsSitesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersChannelsSitesDeletePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public DisplayvideoAdvertisersChannelsSitesDeletePathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=urlOrAppId")
    public String urlOrAppId;
    public DisplayvideoAdvertisersChannelsSitesDeletePathParams withUrlOrAppId(String urlOrAppId) {
        this.urlOrAppId = urlOrAppId;
        return this;
    }
}