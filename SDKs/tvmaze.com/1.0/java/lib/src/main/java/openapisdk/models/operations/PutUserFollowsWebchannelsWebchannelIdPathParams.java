package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserFollowsWebchannelsWebchannelIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webchannel_id")
    public Long webchannelId;
    public PutUserFollowsWebchannelsWebchannelIdPathParams withWebchannelId(Long webchannelId) {
        this.webchannelId = webchannelId;
        return this;
    }
}