package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserFollowsWebchannelsWebchannelIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webchannel_id")
    public Long webchannelId;
    public DeleteUserFollowsWebchannelsWebchannelIdPathParams withWebchannelId(Long webchannelId) {
        this.webchannelId = webchannelId;
        return this;
    }
}