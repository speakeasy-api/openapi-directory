package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNotificationCreateNotificationRequest {
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateNotificationCreateNotificationRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}