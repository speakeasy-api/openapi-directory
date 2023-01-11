package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityGetThreadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thread_id")
    public Long threadId;
    public ActivityGetThreadPathParams withThreadId(Long threadId) {
        this.threadId = threadId;
        return this;
    }
}