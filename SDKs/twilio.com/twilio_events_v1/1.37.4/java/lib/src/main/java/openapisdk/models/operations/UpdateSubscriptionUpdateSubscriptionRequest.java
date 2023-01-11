package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscriptionUpdateSubscriptionRequest {
    @SpeakeasyMetadata("form:name=Description")
    public String description;
    public UpdateSubscriptionUpdateSubscriptionRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("form:name=SinkSid")
    public String sinkSid;
    public UpdateSubscriptionUpdateSubscriptionRequest withSinkSid(String sinkSid) {
        this.sinkSid = sinkSid;
        return this;
    }
}