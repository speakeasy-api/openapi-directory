package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowsWebchannelsWebchannelIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webchannel_id")
    public Long webchannelId;
    public GetUserFollowsWebchannelsWebchannelIdPathParams withWebchannelId(Long webchannelId) {
        this.webchannelId = webchannelId;
        return this;
    }
}