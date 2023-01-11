package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelPrivacyUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public GetChannelPrivacyUsersPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}