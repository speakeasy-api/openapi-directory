package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateQueueUpdateQueueRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateQueueUpdateQueueRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxSize")
    public Long maxSize;
    public UpdateQueueUpdateQueueRequest withMaxSize(Long maxSize) {
        this.maxSize = maxSize;
        return this;
    }
}