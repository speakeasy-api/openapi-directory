package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkerChannelUpdateWorkerChannelRequest {
    @SpeakeasyMetadata("form:name=Available")
    public Boolean available;
    public UpdateWorkerChannelUpdateWorkerChannelRequest withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @SpeakeasyMetadata("form:name=Capacity")
    public Long capacity;
    public UpdateWorkerChannelUpdateWorkerChannelRequest withCapacity(Long capacity) {
        this.capacity = capacity;
        return this;
    }
}