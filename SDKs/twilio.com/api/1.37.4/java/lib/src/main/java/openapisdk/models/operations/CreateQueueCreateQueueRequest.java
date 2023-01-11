package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateQueueCreateQueueRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateQueueCreateQueueRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxSize")
    public Long maxSize;
    public CreateQueueCreateQueueRequest withMaxSize(Long maxSize) {
        this.maxSize = maxSize;
        return this;
    }
}