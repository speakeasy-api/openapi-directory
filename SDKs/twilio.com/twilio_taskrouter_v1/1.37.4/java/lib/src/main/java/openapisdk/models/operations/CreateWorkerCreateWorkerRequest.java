package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkerCreateWorkerRequest {
    @SpeakeasyMetadata("form:name=ActivitySid")
    public String activitySid;
    public CreateWorkerCreateWorkerRequest withActivitySid(String activitySid) {
        this.activitySid = activitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateWorkerCreateWorkerRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateWorkerCreateWorkerRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}