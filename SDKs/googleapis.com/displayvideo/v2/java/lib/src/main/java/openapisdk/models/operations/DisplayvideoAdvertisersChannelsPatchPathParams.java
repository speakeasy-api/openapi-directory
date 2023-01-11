package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersChannelsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersChannelsPatchPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public DisplayvideoAdvertisersChannelsPatchPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}