package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeUserNotificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public UnsubscribeUserNotificationPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}