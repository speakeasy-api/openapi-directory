package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeUserNotificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public SubscribeUserNotificationPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}