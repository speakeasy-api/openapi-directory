package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityDeleteThreadSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thread_id")
    public Long threadId;
    public ActivityDeleteThreadSubscriptionPathParams withThreadId(Long threadId) {
        this.threadId = threadId;
        return this;
    }
}