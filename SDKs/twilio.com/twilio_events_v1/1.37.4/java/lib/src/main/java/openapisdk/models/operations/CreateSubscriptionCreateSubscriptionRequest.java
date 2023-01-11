package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionCreateSubscriptionRequest {
    @SpeakeasyMetadata("form:name=Description")
    public String description;
    public CreateSubscriptionCreateSubscriptionRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("form:name=SinkSid")
    public String sinkSid;
    public CreateSubscriptionCreateSubscriptionRequest withSinkSid(String sinkSid) {
        this.sinkSid = sinkSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Types")
    public Object[] types;
    public CreateSubscriptionCreateSubscriptionRequest withTypes(Object[] types) {
        this.types = types;
        return this;
    }
}